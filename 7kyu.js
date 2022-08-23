// sPoNgEbOb MeMe

function spongeMeme(sentence) {
  let isCapitalised = true;
  const split = sentence.split('');
  let meme = '';

  for (let i = 0; i < split.length; i++) {
    if (isCapitalised) {
      meme += split[i].toUpperCase();
      isCapitalised = false;
    } else if (!isCapitalised) {
      meme += split[i].toLowerCase();
      isCapitalised = true;
    }
  }

  return meme;
}

// console.log(spongeMeme("stop Making spongebob Memes!"));

//-------------------------------------------------------

// Get the Middle Character

function getMiddle(s) {
  const length = s.length;
  if (length % 2 !== 0) {
    let index = Math.floor(length / 2);
    return s.charAt(index);
  } else if (length % 2 === 0) {
    let index = Math.floor(length / 2);
    return s.slice(index - 1, index + 1);
  }
}

// console.log(getMiddle("Orange"));

// ------------------------------------------------------

// Easy wallpaper

numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
];

function wallpaper(l, w, h) {
  if (l === 0 || w === 0 || h === 0) {
    return 'zero';
  } else {
    let roll = 0.52 * 10;
    let room = (l * 2 + w * 2) * h;
    let NrOfRollsNeeded = room / roll;
    let length = NrOfRollsNeeded * 10;
    let lengthIncExtra = (length / 100) * 115;
    let rollsNeeded = lengthIncExtra / 10;
    let rounded = Math.ceil(rollsNeeded);
    let word = numbers[rounded];
    return word;
  }
}

// console.log(wallpaper(0.0, 3.5, 3.0));

// --------------------------------------------

// Highest and Lowest

function highAndLow(numbers) {
  const num = numbers.split(' ').map((element) => Number(element));

  let highest = Math.max(...num);
  let lowest = Math.min(...num);

  return highest + ' ' + lowest;
}

//console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// --------------------------------------------

// Credit Card Mask

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    let masked =
      '#'.repeat(cc.length - 4) + cc.substring(cc.length - 4, cc.length);
    return masked;
  }
}

// console.log(maskify("orangetree"));

// --------------------------------------------------

// Descending Order

function descendingOrder(n) {
  const numbers = n
    .toString()
    .split('')
    .sort(function (a, b) {
      return b - a;
    });

  let newNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    newNum += numbers[i];
  }

  return Number(newNum);
}

// console.log(descendingOrder(121548428));

// ---------------------------------------------------

// Complementary DNA

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  const split = dna.split('');

  split.forEach((letter, i) => {
    if (letter === 'A') split[i] = 'T';
    if (letter === 'T') split[i] = 'A';
    if (letter === 'C') split[i] = 'G';
    if (letter === 'G') split[i] = 'C';
  });

  return split.join('');
}

// console.log(DNAStrand("GTAT"));

// -----------------------------------------------

// List Filtering

function filter_list(l) {
  return (numbersOnly = l.filter((element) => Number.isInteger(element)));
}

// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// ------------------------------------------------

// Is this a triangle?

function isTriangle(a, b, c) {
  const longest = Math.max(a, b, c);
  const total = a + b + c;
  const shorts = total - longest;

  if (longest >= shorts) {
    return false;
  }
  return true;
}

// console.log(isTriangle(7, 2, 2));

// -----------------------------------------

// Detect Pangram

// const string1 = "The quick brown fox jumps over the lazy dog.";
// const string2 = "This is not a pangram.";
// const string3 = "Cwm fjord bank glyphs vext quiz";

function isPangram(string) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const lower = string.toLowerCase();
  const splitString = lower.split('');

  for (let i = 0; i < abc.length; i++) {
    if (!splitString.includes(abc[i])) {
      return false;
    }
  }
  return true;
}

// console.log(isPangram(string3));

// --------------------------------

// Beginner Series #3 Sum of Numbers

// Examples
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  const small = Math.min(a, b);
  const big = Math.max(a, b);
  let nums = null;

  if (a === b) {
    return a;
  } else {
    for (let i = small; i <= big; i++) {
      nums += i;
    }
    return nums;
  }
}

// console.log(getSum(-1, 2));

// ---------------------------------------

// Shortest Word

function findShort(s) {
  const words = s.split(' ');
  let shortest = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest;
}

// console.log(findShort("Let's travel abroad shall we"));

// -------------------------------------

// Simple beads count

function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }
  return (n - 1) * 2;
}

// console.log(countRedBeads(5));

// -------------------------------------

// Number of Divisions

// Example:
//100 can be divided by 2 six times:
// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

const divisions = (n, divisor) => {
  let count = 0;

  while (n >= divisor) {
    n = Math.floor(n / divisor);
    count++;
  }
  return count;
};

// console.log(divisions(9999, 3));

// --------------------------------------

// Wealth equality, finally!

function redistributeWealth(wealth) {
  let totalWealth = wealth.reduce((a, b) => a + b);
  let evenShare = totalWealth / wealth.length;
  return wealth.map((num) => (num = evenShare));
}

// console.log(redistributeWealth([5, 10, 6]));

// --------------------------------------

// Return the closest number multiple of 10

const closestMultiple10 = (num) => {
  return Math.round(num / 10) * 10;
};

// console.log(closestMultiple10(40));

// -----------------------------------

// Race Ceremony

// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]
// 7  ->   [2, 4, 1]

function racePodium(blocks) {
  if (blocks === 7) {
    return [2, 4, 1];
  } else {
    let second = Math.ceil(blocks / 3);
    let first = second + 1;
    let third = blocks - second - first;
    return [second, first, third];
  }
}

// console.log(racePodium(7));

// --------------------------------------

// Reverse list

function reverseList(arr) {
  let solution = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    solution.push(arr[i]);
  }
  return solution;
}

// console.log(reverseList([1, 2, 3]));

// ----------------------------------------------

// Disemvowel Trolls

function disemvowel(str) {
  const vowels = 'aeiou';

  let split = str.split('');
  let noVowels = split.filter(
    (letter) => !vowels.includes(letter.toLowerCase())
  );
  return noVowels.join('');
}

// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// );

// ------------------------------------------------

// Is It Negative Zero (-0)?

function isNegativeZero(n) {
  let split = n.toString();
  console.log(split);
}

// console.log(isNegativeZero(-0));

// ------------------------------------

// 'x' marks the spot.

const xMarksTheSpot = (input) => {
  let rowCoordiantes = [];
  let columnCoordiantes = [];

  for (let i = 0; i < input.length; i++) {
    let currentRow = input[i];

    if (currentRow.includes('x') || currentRow.includes('x')) {
      let currentColumn = currentRow.indexOf('x');
      rowCoordiantes.push(i);
      columnCoordiantes.push(currentColumn);
    }
  }

  if (rowCoordiantes.concat(columnCoordiantes).length === 2) {
    return rowCoordiantes.concat(columnCoordiantes);
  } else {
    return [];
  }
};

// console.log(
//   xMarksTheSpot([
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'x', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'x', 'o', 'o', 'o', 'o'],
//   ])
// );

// -------------------------------------

// Turn the Mars rover to take pictures

function turn(current, target) {
  if (
    (current === 'N' && target === 'E') ||
    (current === 'E' && target === 'S') ||
    (current === 'S' && target === 'W') ||
    (current === 'W' && target === 'N')
  ) {
    return 'right';
  }
  return 'left';
}

// console.log(turn('N', 'E'));

// ------------------------------------

// Who is the killer?

function killer(suspectInfo, dead) {
  const entries = Object.entries(suspectInfo);
  console.log(entries);

  for (let i = 0; i < entries.length; i++) {
    let person = entries[i][0];
    let seen = entries[i][1];
    console.log(person);
    console.log(seen);

    if (dead.every((p) => seen.includes(p))) {
      console.log(person, 'has seen all the dead people');
      return person;
    }
  }
}

// console.log(
//   killer(
//     {
//       James: ['Jacob', 'Bill', 'Lucas'],
//       Johnny: ['David', 'Kyle', 'Lucas'],
//       Peter: ['Lucy', 'Kyle'],
//     },
//     ['Lucas', 'Bill']
//   )
// );
//the killer is James

// console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben']));
//the killer is Megan

// -----------------------------------------

// Previous multiple of three

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

const prevMultOfThree = (n) => {
  if (n % 3 === 0) {
    return n;
  } else if (n % 3 !== 0 && n.toString().length === 1) {
    return null;
  } else {
    while (n % 3 !== 0) {
      let string = n.toString();
      let removedLast = string.slice(0, -1);
      n = Number(removedLast);
      if (n % 3 === 0) {
        return n;
      }
      if (removedLast.length === 1 && n % 3 !== 0) {
        return null;
      }
    }
  }
};

// console.log(prevMultOfThree(952406));

// Last Survivor

// Example:
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

function lastSurvivor(letters, coords) {
  let lettersSplit = letters.split('');

  while (coords.length > 0) {
    lettersSplit.splice(coords[0], 1);
    coords.shift();
  }
  return lettersSplit.join('');
}

// console.log(
//   lastSurvivor(
//     'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr',
//     [
//       8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23,
//       56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55,
//       24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39,
//       36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7,
//       0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1,
//     ]
//   )
// );
