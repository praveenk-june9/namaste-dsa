
const arr = [1, 2, 3, 2, 1];

function isPalindromeArray(arr) {
  if (!Array.isArray(arr)) return false;

  const size = arr.length;
  const middle = Math.floor(size / 2);

  if (size === 0) return true; // An empty array is considered a palindrome

  if (size % 2 === 1) {
    // If the array has an odd number of elements, the middle element can be ignored
    // as it does not affect the palindrome property
    return isPalindromeArray(arr.slice(0, middle).concat(arr.slice(middle + 1)));
  } else {
    // If the array has an even number of elements, we can directly compare the two halves
    for (let i = 0; i < middle; i++) {
      if (arr[i] !== arr[size - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPalindromeArray(arr)); // true