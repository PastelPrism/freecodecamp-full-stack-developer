function destroyer(array) {
  let args = Array.prototype.slice.call(arguments, 1);
  return array.filter(function(item) {
    return args.indexOf(item) === -1;
  });
}
 
