// import { TestInterface } from "mocha";

export = {};
let getCheckSum = (data: String): Number => {
  // validation  for checking if data is null or empty
  //   if (data == undefined || data.length == undefined) {
  //     return 0;
  //   } else {
  let totalSum: number = 0;

  // mapping the data into 2D array seperating by \n &\t
  data.split(';').map((arr) => {
    let slicedArr: string = arr.slice(0, arr.length);
    var my2dArray: Array<String> = slicedArr.split('\n');

    //Iterating through the 2DArray to get rows
    my2dArray.forEach((i) => {
      var splitedArray = i.split('\t');

      //Converting the array to number array
      let myNumArr: Array<number> = splitedArray.map(Number);

      //getting the maximum and minimum of the row using MAth and spread operator
      let min: number = Math.min(...myNumArr);
      let max: number = Math.max(...myNumArr);

      //calculating the difference and sum of differences from each row
      let diff: number = max - min;
      totalSum = totalSum + diff;
    });
  });
  console.log('CheckSum ', totalSum);
  return totalSum;
};

const fs = require('fs');
var actualFile = fs.readFileSync('general.tsv', 'utf8');
getCheckSum(actualFile);
