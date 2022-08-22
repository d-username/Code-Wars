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

// console.log(countBits(1234));

// ---------------------------------

// Find the odd int

// Example:
// ([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
// ([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
// ([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
// ([10], 10);

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    count = arr.filter((num) => num === arr[i]).length;

    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// --------------------------------------------

// Your order, please

// Examples:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  if (!words) {
    return '';
  }

  const split = words.split(' ');
  let index = 1;
  let solution = [];

  let d = 0;
  while (d < split.length) {
    for (let i = 0; i < split.length; i++) {
      let current = split[i];
      let number = parseInt(current.replace(/[^0-9.]/g, ''));

      if (number === index) {
        solution.push(current);
        index++;
      }
    }
    d++;
  }

  return solution.join(' ');
}

// console.log(order('is2 Thi1s T4est 3a'));

// ------------------------------------

// Array.diff

// Examples:
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}

// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

//------------------------------------------

// Persistent Bugger

// Example:
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let count = 0;
  let digits = num.toString().split('');

  if (digits.length === 1) {
    return 0;
  }

  while (digits.length > 1) {
    let multiplied = digits.reduce((a, b) => a * b, 1);
    digits = multiplied.toString().split('');
    count++;
  }
  return count;
}

// console.log(persistence(39));

// ----------------------------------

// Counting Duplicates

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const split = text.toLowerCase().split('');
  let repeats = [];

  for (let i = 0; i < split.length; i++) {
    let count = split.filter((letter) => letter === split[i]).length;

    if (count > 1 && !repeats.includes(split[i])) {
      repeats.push(split[i]);
    }
  }
  return repeats.length;
}

// console.log(duplicateCount('aabBcde'));

// --------------------------------------

// Decode the Morse code

const MORSE_CODE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

decodeMorse = function (morseCode) {
  if (morseCode === '···−−−···' || morseCode === '···---···') {
    return 'SOS';
  }

  let splitCode = morseCode.split(' ');
  let decoded = [];

  for (let i = 0; i < splitCode.length; i++) {
    if (MORSE_CODE[splitCode[i]] === undefined) {
      decoded.push(' ');
    } else {
      decoded.push(MORSE_CODE[splitCode[i]]);
    }
  }

  for (let i = 0; i < decoded.length; i++) {
    decoded[i] = decoded[i].toUpperCase();
    if (decoded[i] === ' ' && decoded[i + 1] === ' ') {
      decoded.splice(i, 1);
    }
  }

  return decoded.join('').trim();
};

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

// -----------------------------------

// Catalog

// Example answer:
// "table saw > prx: $1099.99 qty: 5 \n saw > prx: $9 qty: 10"

const s =
  '<prod><name>drill</name><prx>99</prx><qty>5</qty></prod><prod><name>hammer</name><prx>10</prx><qty>50</qty></prod><prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod><prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod><prod><name>saw</name><prx>9</prx><qty>10</qty></prod>';

function catalog(s, article) {
  const articlesArray = s.split('</prod>');
  let solutionArray = [];

  for (let i = 0; i < articlesArray.length; i++) {
    const oneArticle = articlesArray[i];

    const title = oneArticle.substring(
      oneArticle.indexOf('<name>') + 6,
      oneArticle.lastIndexOf('</name>')
    );

    if (title && title.includes(article)) {
      const price = oneArticle.substring(
        oneArticle.indexOf('<prx>') + 5,
        oneArticle.lastIndexOf('</prx>')
      );

      const quantity = oneArticle.substring(
        oneArticle.indexOf('<qty>') + 5,
        oneArticle.lastIndexOf('</qty>')
      );

      let line = title + ' > prx: $' + price + ' qty: ' + quantity;
      solutionArray.push(line);
    }
  }

  if (solutionArray.length < 1) {
    return 'Nothing';
  } else {
    return solutionArray.join('\r\n');
  }
}

// console.log(catalog(s, 'saw'));

// --------------------------------------------
