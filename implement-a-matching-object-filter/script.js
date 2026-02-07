function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(object =>
    sourceKeys.every(key => object.hasOwnProperty(key) && object[key] === source[key])
  );
}