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
