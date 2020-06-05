export {};
let question = function (a: String): Number {
  let count: Number = 0;
  let currentElement: Number;
  let lastElement: Number;
  let cArray: any = a.split('').map(Number);
  //iterating the array to check match condition
  for (var i = 0; i < cArray.length; i++) {
    {
      // if current element is first index then we match the first index element value with last index value.
      if (i === 0) {
        currentElement = cArray[i];
        lastElement = cArray[cArray.length - 1];
      } else {
        // otherwise we are matching the current value with the last index element value
        currentElement = cArray[i];
        lastElement = cArray[i - 1];
      }
      //checking if the currentElement is equal to lastElement then we are adding value of current element to total count
      if (lastElement == currentElement) {
        count = +currentElement + +count;
      }
    }
  }
  console.info('Checksum=' + count);
  return count;
};
question('1111');
