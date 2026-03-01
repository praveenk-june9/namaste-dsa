// Selection sort digits ascending

const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
// const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(arr) {
  const tempArr = [...arr];
  const n = tempArr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (tempArr[j] < tempArr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = tempArr[i];
      tempArr[i] = tempArr[minIndex];
      tempArr[minIndex] = temp;
    }
  }
  return tempArr;
}

const sortedArray = selectionSort(arrayToSort);

console.log("Unsorted array:", arrayToSort);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]