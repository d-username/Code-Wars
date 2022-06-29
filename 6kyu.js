// Make A Window

function makeAWindow(num) {
  let topBottom = '-'.repeat(num * 2 + 3);
  let periods = '.'.repeat(num);
  let middleLine = '-'.repeat(num);
  let middle = '|' + middleLine + '+' + middleLine + '|';
  let panel = '|' + periods + '|' + periods + '|';
  let windowCell = ('\n' + panel).repeat(num);
  let window =
    topBottom + windowCell + '\n' + middle + windowCell + '\n' + topBottom;

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
  const words = string.split(' ');
  solution = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      let reversed = words[i].split('').reverse().join('');
      solution.push(reversed);
    }
    if (words[i].length < 5) {
      solution.push(words[i]);
    }
  }
  return solution.join(' ');
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

// Who likes it?

// Example:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  }
  if (names.length === 1) {
    return `${names} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes(["Jacob", "Alex", "Max", "David", "Emma"]));

// -----------------------------------------------

// Create Phone Number

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  return (
    '(' +
    numbers[0] +
    numbers[1] +
    numbers[2] +
    ') ' +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    '-' +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]
  );
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// --------------------------------------------

// Unique In Order

// Example:
// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

var uniqueInOrder = function (iterable) {
  let unique = [];
  if (typeof iterable === 'string') {
    let split = iterable.split('');
    for (let i = 0; i < split.length; i++) {
      if (split[i] !== split[i + 1]) {
        unique.push(split[i]);
      }
    }
  } else {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        unique.push(iterable[i]);
      }
    }
  }
  return unique;
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));

// --------------------------------------------

// The Deaf Rats of Hamelin

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right

// Example
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function (town) {
  let piper = false;
  let deaf = 0;
  let rat = '';

  for (let i = 0; i < town.length; i++) {
    if (town[i] === 'P') {
      piper = true;
      rat = '';
    } else if (town[i] === ' ') {
      rat = '';
    } else {
      rat += town[i];
    }

    if (piper === false && rat === 'O~') {
      deaf++;
    } else if (piper === true && rat === '~O') {
      deaf++;
    }

    if (rat.length === 2) {
      rat = '';
    }
  }
  return deaf;
};

// console.log(countDeafRats("PO~O~~O  O~  O~O~O~O~O~~OO~O~"));

// --------------------------------

// Dead Ants

// The ants on walk look like this:
// ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..

// Damaged ands look like this:
// ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t

deadAntCount = function (ants) {
  if (!ants) {
    return 0;
  }

  let antParts = ants.replace(/ant/g, '');
  let letters = antParts.split('');

  let a = 0;
  let n = 0;
  let t = 0;

  letters.forEach((element) => {
    if (element === 'a') {
      a++;
    }
    if (element === 'n') {
      n++;
    }
    if (element === 't') {
      t++;
    }
  });

  return Math.max(a, n, t);
};

// console.log(deadAntCount("ant ant .... a nt"));

// ---------------------------------------------

// Single Word Pig Latin

function pigLatin(string) {
  const vowels = 'aeiou';
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < string.length; i++) {
    if (!abc.includes(string[i].toLowerCase())) {
      return null;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[0].toLowerCase())) {
      return string.toLowerCase() + 'way';
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      return (
        string.substring(i).toLowerCase() +
        string.substring(0, i).toLowerCase() +
        'ay'
      );
    }
  }
  return string.toLowerCase() + 'ay';
}

// console.log(pigLatin("Spaghetti"));

// -----------------------------------

// Bit Counting

var countBits = function (n) {
  const binary = n.toString(2);
  let one = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      one++;
    }
  }
  return one;
};

console.log(countBits(1234));

// ---------------------------------
