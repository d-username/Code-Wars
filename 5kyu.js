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
