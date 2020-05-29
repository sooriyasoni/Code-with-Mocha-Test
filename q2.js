module.exports = getCheckSum = (data) => {
    // validation  for checking if data is null or empty
    if (data == undefined || data.length == undefined) {
        return 0;
    } else {
        var totalSum = 0

        // mapping the data into 2D array seperating by \n &\t 
        data.split(';').map(arr => {
            var slicedArr = arr.slice(0, arr.length);
            var my2dArray = slicedArr.split('\n');

            //Iterating through the 2DArray to get rows
            my2dArray.forEach((i) => {
                var splitedArray = i.split('\t');

                //Converting the array to number array
                var myNumArr = splitedArray.map(Number)

                //getting the maximum and minimum of the row using MAth and spread operator 
                var min = Math.min(...myNumArr)
                var max = Math.max(...myNumArr)

                //calculating the difference and sum of differences from each row
                var diff = max - min
                totalSum = totalSum + diff;
            })
        });
        console.log('CheckSum ', totalSum)
        return totalSum
    }
}

