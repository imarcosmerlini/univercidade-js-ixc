// Hello, World
function greeting(parameterVariable) {
  console.log("Hello, World!");
  console.log(parameterVariable);
}

// Data Types
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  console.log(parseInt(secondInteger) + firstInteger);
  console.log(parseFloat(secondDecimal) + firstDecimal);
  console.log(`${firstString}${secondString}`);
}

// Arithmetic Operators
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}

// Functions
function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Let and Const
function main() {
  const PI = Math.PI;
  let r = readLine();
  const area = PI * r * r;
  const perimeter = 2 * PI * r;

  console.log(area);
  console.log(perimeter);
}

//  Conditional Statements: If-Else
function getGrade(score) {
  let grade;
  if (score >= 0 && score <= 5) {
    return "F";
  } else if (score <= 10) {
    return "E";
  } else if (score <= 15) {
    return "D";
  } else if (score <= 20) {
    return "C";
  } else if (score <= 25) {
    return "B";
  } else if (score <= 30) {
    return "A";
  }

  return grade;
}

// Conditional Statements: Switch
function getLetter(s) {
  let letter;
  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "A";
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B";
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C";
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      return "D";
  }
  return letter;
}
