const lunches = [];
function addLunchToEnd(lunchArray, newItem) {
  lunchArray.push(newItem);
  console.log(`${newItem} added to the end of the lunch menu.`);
  return lunchArray;
}
function addLunchToStart(lunchArray, newItem) {
  lunchArray.unshift(newItem);
  console.log(`${newItem} added to the start of the lunch menu.`);
  return lunchArray;
}
function removeLastLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunchArray.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return lunchArray;
}
function removeFirstLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = lunchArray.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return lunchArray;
}
function getRandomLunch(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunchArray.length);
    console.log(`Randomly selected lunch: ${lunchArray[randomIndex]}`);
  }
}
function showLunchMenu(lunchArray) {
  if (lunchArray.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunchArray.join(", ")}`);
  }
}