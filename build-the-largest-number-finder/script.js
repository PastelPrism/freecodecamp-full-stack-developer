function largestOfAll(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let largest = array[i][0];
        for (let j = 1; j < array[i].length; j++) {
            if (array[i][j] > largest) {
                largest = array[i][j];
            }
        }

        result.push(largest);
    }

    return result;
}
