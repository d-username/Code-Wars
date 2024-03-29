// Simple Pig Latin

// Examples:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const punctuation = '.?!';
  let solution = [];

  str.split(' ').map((element) => {
    if (!punctuation.includes(element)) {
      element = element.substring(1) + element.substring(0, 1) + 'ay';
      solution.push(element);
    } else {
      solution.push(element);
    }
  });
  return solution.join(' ');
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
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  let parameters = [r, g, b];
  let hex = '';

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
    time.HH.toString().padStart(2, '0') +
    ':' +
    time.MM.toString().padStart(2, '0') +
    ':' +
    time.SS.toString().padStart(2, '0')
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
    if (parens[i] === '(') {
      opening++;
    }
    if (parens[i] === ')') {
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

// ----------------------------------------

// The Hashtag Generator

// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (!str || str === '') {
    return false;
  }

  const split = str.split(' ');
  let capitalised = [];

  for (let i = 0; i < split.length; i++) {
    if (split[i] !== '') {
      let caps = split[i][0].toUpperCase() + split[i].slice(1);
      capitalised.push(caps);
    }
  }

  capitalised = '#' + capitalised.join('');

  if (capitalised.length > 140 || capitalised === '#') {
    return false;
  }
  return capitalised;
}

// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

// -----------------------------------------

// First non-repeating character

function firstNonRepeatingLetter(s) {
  const split = s.split('');

  for (let i = 0; i < split.length; i++) {
    count = split.filter(
      (letter) => letter.toLowerCase() === split[i].toLowerCase()
    ).length;

    if (count === 1) {
      return split[i];
    }
  }
  return '';
}

// console.log(firstNonRepeatingLetter('mama'));

// --------------------------------------

// Directions Reduction

function dirReduc(arr) {
  let doLoop = true;

  while (doLoop) {
    loopThrough(arr);
  }

  function loopThrough(arr) {
    let changed = false;
    for (let i = 0; i < arr.length; i++) {
      let first = arr[i];
      let second = arr[i + 1];
      if (compareWithNext(first, second) === true) {
        arr.splice(i, 2);
        changed = true;
      }
    }
    if (!changed) {
      doLoop = false;
    }
  }

  function compareWithNext(first, second) {
    if (
      (first === 'NORTH' && second === 'SOUTH') ||
      (first === 'SOUTH' && second === 'NORTH') ||
      (first === 'EAST' && second === 'WEST') ||
      (first === 'WEST' && second === 'EAST')
    ) {
      return true;
    }
  }

  return arr;
}

// console.log(
//   dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
// );

// --------------------------------------------

// Rot13

function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let messageArray = message.split('');

  let codedMessageArray = messageArray.map((letter) => swapLetter(letter));

  function swapLetter(letter) {
    if (!alphabet.includes(letter.toLowerCase())) {
      return letter;
    }

    let indexOfLetter = alphabet.indexOf(letter.toLowerCase());
    let indexOfNewLetter;

    if (indexOfLetter + 13 < alphabet.length) {
      indexOfNewLetter = indexOfLetter + 13;
    } else if (indexOfLetter + 13 >= alphabet.length) {
      indexOfNewLetter = 13 - (alphabet.length - indexOfLetter);
    }

    if (letter === letter.toUpperCase()) {
      return alphabet.charAt(indexOfNewLetter).toUpperCase();
    } else if (letter !== letter.toUpperCase()) {
      return alphabet.charAt(indexOfNewLetter).toLowerCase();
    }
  }
  return codedMessageArray.join('');
}

// console.log(rot13('Ruby is cool!'));

// -------------------------------------------

// String incrementer

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

const incrementString = (string) => {
  let numbersPart = string.match(/\d+/g);

  if (numbersPart) {
    numbersPart++;
  } else {
    return string + '1';
  }

  const lengthOfNumbers = string.match(/\d/g).length;
  const difference = lengthOfNumbers - numbersPart.toString().length;

  for (let i = 0; i < difference; i++) {
    numbersPart = '0' + numbersPart;
  }

  return string.replace(/\d+/g, numbersPart);
};

// console.log(incrementString('foo0000999'));

// -------------------------------------

// Extract the domain name from a URL

// Examples:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  if (url.includes('www')) {
    let betweenDots = url.match(/\.(.*?)\./g).toString();
    let domain = betweenDots.slice(1, -1);
    return domain;
  } else if (url.includes('://')) {
    let betweenColonAndDot = url.match(/\:(.*?)\./g).toString();
    let domain = betweenColonAndDot.slice(3, -1);
    return domain;
  } else {
    let evertyhingUntilDot = url.match(/[^.]*/).toString();
    return evertyhingUntilDot;
  }
}

// console.log(domainName('7teovdivozmz6vxueus.co.uk'));

// ---------------------------------------------
