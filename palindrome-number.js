function isNumberPalindrome(n) {
  let original = n;
  let reverse = 0;

  if (n < 0) {
    return false;
  }

  while (n > 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  return reverse === original;
}



isNumberPalindrome(12133121) // true
isNumberPalindrome(121) // true
isNumberPalindrome(123) //false
isNumberPalindrome(-123) //false
isNumberPalindrome(0) // true