function reverseInteger(num) {
  const original = num;
  let reverse = 0;
  num = Math.abs(num);

  while (num > 0) {
    const lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return original < 0 ? -reverse : reverse;
}


reverseInteger(12) // 21
reverseInteger(10002) // 20001
reverseInteger(-9837) // -7389


function getDigits(num) {
  num = Math.abs(num);
  let count = 0;

  if (num == 0) {
    return 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}