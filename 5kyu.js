// Simple Pig Latin

// Examples:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const punctuation = ".?!";
  let solution = [];

  str.split(" ").map((element) => {
    if (!punctuation.includes(element)) {
      element = element.substring(1) + element.substring(0, 1) + "ay";
      solution.push(element);
    } else {
      solution.push(element);
    }
  });
  return solution.join(" ");
}

// console.log(pigIt("Hello world !"));

//Moving Zeros To The End

function moveZeros(arr) {
  const filtered = arr.filter((element) => element !== 0);
  const zeros = arr.filter((element) => element === 0).length;

  for (var i = 0; i < zeros; i++) {
    filtered.push(0);
  }
  return filtered;
}

// console.log(moveZeros([false, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

//-------------------------------------------

// RGB To Hex Conversion

function rgb(r, g, b) {
  chart = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  let parameters = [r, g, b];
  let hex = "";

  for (let i = 0; i < parameters.length; i++) {
    if (parameters[i] < 0) {
      parameters[i] = 0;
    }
    if (parameters[i] > 255) {
      parameters[i] = 255;
    }
  }

  for (let i = 0; i < parameters.length; i++) {
    let first = Math.floor(parameters[i] / 16);
    hex += chart[first];
    let second = (parameters[i] / 16 - first) * 16;
    hex += chart[second];
  }
  return hex;
}

// console.log(rgb(26, 250, 175));

// ------------------------------------

// Human Readable Time

function humanReadable(seconds) {
  let time = {
    HH: 0,
    MM: 0,
    SS: 0,
  };

  while (seconds >= 3600) {
    seconds = seconds - 3600;
    time.HH++;
  }

  while (seconds >= 60) {
    seconds = seconds - 60;
    time.MM++;
  }

  while (seconds > 0) {
    seconds = seconds - 1;
    time.SS++;
  }

  return (
    time.HH.toString().padStart(2, "0") +
    ":" +
    time.MM.toString().padStart(2, "0") +
    ":" +
    time.SS.toString().padStart(2, "0")
  );
}

// console.log(humanReadable(59));

// --------------------------------------

// Valid Parentheses

// Examples:
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  if (!parens) {
    return true;
  }

  let opening = 0;
  let closing = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      opening++;
    }
    if (parens[i] === ")") {
      closing++;
      if (closing > opening) {
        return false;
      }
    }
  }

  if (opening > closing) {
    return false;
  }

  return true;
}

// console.log(validParentheses("(())((()())())"));
