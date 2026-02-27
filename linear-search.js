// Return index of target if found, else return -1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 8;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, target)); // Output: 7