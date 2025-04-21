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

// Loops
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= s.length; i++) {
    if (vowels.includes(s.charAt(i))) {
      console.log(s.charAt(i));
    }
  }
  for (let i = 0; i <= s.length; i++) {
    if (!vowels.includes(s.charAt(i))) {
      console.log(s.charAt(i));
    }
  }
}

// Arrays
function getSecondLargest(nums) {
  let largest = nums[0];
  let secondLargest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
      continue;
    }

    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

// Try, Catch, and Finally
function reverseString(s) {
  try {
    s = s.split("").reverse().join().replaceAll(",", "");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

// Throw
function isPositive(a) {
  if (a === 0) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  }
  if (Math.sign(a) >= 0) {
    return "YES";
  }
}

// Create a Rectangle Object
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}

// Count Objects
function getCount(objects) {
  let countOfEqualAttributes = 0;
  objects.forEach(function (object) {
    if (object.x == object.y) {
      countOfEqualAttributes++;
    }
  });
  return countOfEqualAttributes;
}

// Arrow Functions
function modifyArray(nums) {
  return nums.map((element) => {
    if (element % 2) {
      return element * 3;
    } else {
      return element * 2;
    }
  });
}

// Javascript Dates
function getDayName(dateString) {
  let dayName;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(dateString);
  dayName = days[date.getDay()];
  return dayName;
}

// Template Literals
function calculateSides(a, p) {
  let results = [];
  let term = Math.sqrt(p * p - 16 * a);
  results.push((p + term) / 4.0);
  results.push((p - term) / 4.0);
  results.sort(function (a, b) {
    return a - b;
  });
  return results;
}

function sides(literals, ...expressions) {
  let area = expressions[0];
  let perimeter = expressions[1];
  return calculateSides(area, perimeter);
}
