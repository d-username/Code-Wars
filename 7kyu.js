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
