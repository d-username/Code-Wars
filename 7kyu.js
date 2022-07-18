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

console.log(redistributeWealth([5, 10, 6]));

// --------------------------------------
