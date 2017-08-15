function countItem (arr, item) {
  return arr.filter((value) => value == item).length;
}

console.log(countItem([1, 1, 3, 5, 9, 9, 9], 9));