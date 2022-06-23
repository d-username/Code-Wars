// Make A Window

function makeAWindow(num) {
  let topBottom = "-".repeat(num * 2 + 3);
  let periods = ".".repeat(num);
  let middleLine = "-".repeat(num);
  let middle = "|" + middleLine + "+" + middleLine + "|";
  let panel = "|" + periods + "|" + periods + "|";
  let windowCell = ("\n" + panel).repeat(num);
  let window =
    topBottom + windowCell + "\n" + middle + windowCell + "\n" + topBottom;

  return window;
}

// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------

// console.log(makeAWindow(4));

// --------------------------------------------------------------

// Stop gninnipS My sdroW!

function spinWords(string) {
  const words = string.split(" ");
  solution = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      let reversed = words[i].split("").reverse().join("");
      solution.push(reversed);
    }
    if (words[i].length < 5) {
      solution.push(words[i]);
    }
  }
  return solution.join(" ");
}

// console.log(spinWords("Hey fellow warriors"));

// --------------------------------------------------------

// Multiples of 3 or 5

function solution(number) {
  let nums = [];

  if (number <= 3) {
    return 0;
  } else {
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        nums.push(i);
      }
    }
  }
  return nums.reduce((a, b) => a + b);
}

// console.log(solution(10));

// ---------------------------------------------------

// Length of missing array

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) {
    return 0;
  }

  let lengths = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (
      arrayOfArrays[i] === null ||
      arrayOfArrays[i].length === 0 ||
      arrayOfArrays[i] === 0
    ) {
      return 0;
    } else {
      lengths.push(arrayOfArrays[i].length);
    }
  }
  const sortedLengths = lengths.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedLengths.length; i++) {
    if (sortedLengths[i] + 1 !== sortedLengths[i + 1]) {
      return sortedLengths[i] + 1;
    }
  }
}

// console.log(getLengthOfMissingArray([]));

// ----------------------------------------------------
