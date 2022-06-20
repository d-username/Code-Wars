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

// console.log(makeAWindow(3));

// --------------------------------------------------------------
