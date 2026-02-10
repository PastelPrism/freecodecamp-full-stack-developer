function truthCheck(collection, pre) {
    return collection.every(obj => obj.hasOwnProperty(pre) && Boolean(obj[pre]));
}
