function getDigitCount(num) {
  let count = 0;

  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    num = Math.abs(num);
  }

  while (num > 0) {
    num = Math.floor(num / 10)
    count++;
  }

  return count;
}


getDigitCount(0) // 1
getDigitCount(1) // 1
getDigitCount(10) // 2
getDigitCount(123456789) // 9
getDigitCount(-90) // 2