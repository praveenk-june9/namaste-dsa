// Merge sorted arrays in non decreasing order

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let p1 = 0;
  let p2 = 0;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      mergedArray.push(arr1[p1]);
      p1++;
    } else {
      mergedArray.push(arr2[p2]);
      p2++;
    }
  }

  return [...mergedArray, ...arr1.slice(p1), ...arr2.slice(p2)];
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]



// In-Place merge sorted arrays in non decreasing order

function mergeSortedArraysInPlace(arr1, arr2) {
  let p1 = arr1.length - 1; // index of arr1
  let p2 = arr2.length - 1; // index of arr2
  let pMerged = arr1.length + arr2.length - 1; // index for merged array

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

  while (p1 >= 0 && p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      arr1[pMerged] = arr1[p1];
      p1--;
    } else {
      arr1[pMerged] = arr2[p2];
      p2--;
    }
    pMerged--;
  }

  while (p2 >= 0) {
    arr1[pMerged] = arr2[p2];
    pMerged--;
    p2--;
  }

  return arr1;
}

// Example usage:
const arr3 = [1, 3, 5, 0, 0, 0]; // arr1 with extra space for arr2
const arr4 = [2, 4, 6];
console.log(mergeSortedArraysInPlace(arr3, arr4)); // Output: [1, 2, 3, 4, 5, 6]