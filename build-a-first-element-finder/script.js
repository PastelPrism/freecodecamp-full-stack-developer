function findElement(array, func) {
    for (const item of array) {
        if (func(item)) {
            return item;
        }
    }
    return undefined;
}
