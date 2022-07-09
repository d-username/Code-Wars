// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  arr2.forEach((num) => {
    if (!arr1.includes(num)) {
      arr1.push(num);
    }
  });
  const sortedArr = arr1.sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

//console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

// ------------------------------------------------------------

// Fixme - Replace all dots

var replaceDots = function (str) {
  return (resultingString = str.split('.').join('-'));
};

//console.log(replaceDots("one.two.three"));

// Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// ------------------------------
