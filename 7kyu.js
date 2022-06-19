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
