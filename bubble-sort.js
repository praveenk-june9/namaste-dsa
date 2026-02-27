// Bubble sort implementation

const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
// const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(arr) {
  const sortedArr = [...arr];
  const n = sortedArr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
        console.log("j: ", j); // this will not be loggesd if the array is already sorted
        isSwapped = true; // Set flag to true if a swap occurred
      }
    }

    if (!isSwapped) {
      break; // If no swaps occurred, the array is already sorted, so we can exit early
    }
  }
  return sortedArr;
}

const sortedArray = bubbleSort(arrayToSort);

console.log("Unsorted array:", arrayToSort);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]