// sPoNgEbOb MeMe

function spongeMeme(sentence) {
  let isCapitalised = true;
  const split = sentence.split("");
  let meme = "";

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
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];

function wallpaper(l, w, h) {
  if (l === 0 || w === 0 || h === 0) {
    return "zero";
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
  const num = numbers.split(" ").map((element) => Number(element));

  let highest = Math.max(...num);
  let lowest = Math.min(...num);

  return highest + " " + lowest;
}

//console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// --------------------------------------------

// Credit Card Mask

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    let masked =
      "#".repeat(cc.length - 4) + cc.substring(cc.length - 4, cc.length);
    return masked;
  }
}

console.log(maskify("orangetree"));
