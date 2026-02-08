const arr = [1, 4, 2, 9, 30, 5, 19]
function secondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i]
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}