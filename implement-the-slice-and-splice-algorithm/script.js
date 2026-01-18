function frankenSplice(array1, array2, n) {
    let result = array2.slice();
    result.splice(n, 0, ...array1);
    return result;
}