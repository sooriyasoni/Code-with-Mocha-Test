module.exports = question1 = (a) => {
    // check if the input is not undefined, null or invalid else return 0
    // check if input has atleast 2 digit to match with eact other else return 0
    if (a == undefined || null || (a.length == 1) || a.length == undefined) {
        return 0
    } else {
        var count = 0;
        var nextElement;
        var currentElement;

        // convert the string into number array
        var cArray = a.split('').map(Number);

        //iterating the array to check match condition
        for (var i = 0; i < cArray.length; i++) {
            {
                // if current element is first index then we match the first index element value with last index value.
                if (i === 0) {
                    currentElement = cArray[i];
                    lastElement = cArray[cArray.length - 1]

                }
                else {
                    // otherwise we are matching the current value with the last index element value
                    currentElement = cArray[i];
                    lastElement = cArray[i - 1]
                }
                //checking if the currentElement is equal to lastElement then we are adding value of current element to total count 
                if (lastElement == currentElement) {
                    count = currentElement + count;
                }
            }
        }
        console.info('Checksum=' + count);
        return count
    }
}
//unit test