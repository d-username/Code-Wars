const fs = require('fs');

// read file - SYNC
var text = fs.readFileSync('./text.txt', 'utf8');
console.log(text);

// read file - ASYNC
fs.readFile('./text.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString('utf8'));
  //or take advantage of the callback function.
});

// Use fs.writeFile() method to write data to a file. If file already exists then it overwrites the existing content otherwise it creates a new file and writes data into it

// write file - SYNC
let data = 'It is Thursday';

function writeFile() {
  fs.writeFileSync('./textOne.txt', data);
}

writeFile();

// Append to an existing file
function appendToFile() {
  fs.appendFile('text.txt', 'Hello World!', function (err) {
    if (err) console.log(err);
    else console.log('Append operation complete.');
  });
}

appendToFile();
