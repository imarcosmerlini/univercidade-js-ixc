const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "dump_sintetico_personalizado.csv");

async function processFile() {
  const summary = {
    actionsPerTable: {},
    statusCount: {},
    executionTimes: [],
    backupStats: { has_backup: 0, missing_backup: 0 },
    dataPeriod: {
      earliest: null,
      latest: null,
    },
  };

  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (!line.trim()) continue;

    const jsonStart = line.indexOf("{");
    const jsonEnd = line.indexOf("}") + 1;

    if (jsonStart === -1 || jsonEnd === -1) continue;

    let jsonString = line.slice(jsonStart, jsonEnd).replace(/""/g, '"');

    let embeddedObject;
    try {
      embeddedObject = JSON.parse(jsonString);
    } catch (err) {
      console.warn("Failed to parse JSON in line:", line);
      continue;
    }

    const table = embeddedObject.tabela?.trim() || "unknown";
    const status = embeddedObject.status?.trim() || "unknown";
    const tempo = parseFloat(embeddedObject.tempo_execucao || "0");
    const backup = embeddedObject.ultimo_backup;

    summary.actionsPerTable[table] = (summary.actionsPerTable[table] || 0) + 1;
    summary.statusCount[status] = (summary.statusCount[status] || 0) + 1;

    if (!isNaN(tempo)) summary.executionTimes.push(tempo);

    if (backup && backup.trim() !== "") {
      summary.backupStats.has_backup += 1;
    } else {
      summary.backupStats.missing_backup += 1;
    }
    const inicio = embeddedObject.inicio?.trim();
    const fim = embeddedObject.fim?.trim();

    const parseDate = (str) => (str ? new Date(str) : null);

    const inicioDate = parseDate(inicio);
    const fimDate = parseDate(fim);

    if (
      inicioDate &&
      (!summary.dataPeriod.earliest ||
        inicioDate < new Date(summary.dataPeriod.earliest))
    ) {
      summary.dataPeriod.earliest = inicioDate.toISOString();
    }

    if (
      fimDate &&
      (!summary.dataPeriod.latest ||
        fimDate > new Date(summary.dataPeriod.latest))
    ) {
      summary.dataPeriod.latest = fimDate.toISOString();
    }
  }

  const times = summary.executionTimes;
  summary.executionTimeStats = {
    average: times.length
      ? (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2)
      : "0",
    min: times.length ? Math.min(...times).toFixed(2) : "0",
    max: times.length ? Math.max(...times).toFixed(2) : "0",
  };

  delete summary.executionTimes;

  function objectToTableData(obj, label = "Key", valueLabel = "Ações") {
    return Object.entries(obj).map(([key, value]) => ({
      [label]: key,
      [valueLabel]: value,
    }));
  }

  console.log("\nPeríodo analisado");
  console.table(objectToTableData(summary.dataPeriod, "Período", "Data"));

  console.log("\nAções por tabela:");
  console.table(objectToTableData(summary.actionsPerTable, "Tabela"));

  console.log("\nAções por status:");
  console.table(objectToTableData(summary.statusCount, "Status"));

  console.log("\nBackup");
  console.table(objectToTableData(summary.backupStats, "Backup"));

  console.log("\nTempo de execução");
  console.table(
    objectToTableData(summary.executionTimeStats, "Métrica", "Segundos"),
  );
}

processFile();
