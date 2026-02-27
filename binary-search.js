// Binary search implementation in JavaScript
// Assumption: The array is sorted

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 9;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    const middleIndex = Math.floor((left + right) / 2);
    const middleValue = arr[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      left = middleIndex + 1; // Search in the right half
    } else {
      right = middleIndex - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

console.log(binarySearch(sortedArray, target)); // Output: 8