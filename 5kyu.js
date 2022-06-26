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
