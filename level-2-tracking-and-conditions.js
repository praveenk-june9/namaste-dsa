// LEVEL 2 — TRACKING & CONDITIONS (40)

// Max digit
{
  let n = 1238967;
  let maxDigit = -Infinity;
  while (n > 0) {
    let digit = n % 10;
    if (digit > maxDigit) {
      maxDigit = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(maxDigit);
}

// Min digit
{
  let n = 1238967;
  let minDigit = Infinity;
  while (n > 0) {
    let digit = n % 10;
    if (minDigit > digit) {
      minDigit = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(minDigit);
}

// Second max digit
{
  let n = 1238967;
  let maxDigit = -Infinity;
  let secondMaxDigit = -Infinity;
  while (n > 0) {
    let digit = n % 10;
    if (digit > maxDigit) {
      secondMaxDigit = maxDigit;
      maxDigit = digit;
    } else if (digit > secondMaxDigit && digit < maxDigit) {
      secondMaxDigit = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(secondMaxDigit);
}

// Count even digits
{
  let n = 1238967;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// Count odd digits
{
  let n = 1238967;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// Count zeros
{
  let n = 1020304050;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit === 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// First digit
{
  let n = 1238967;
  let firstDigit = n % 10;
  while (n > 0) {
    firstDigit = n % 10;
    n = Math.floor(n / 10);
  }
  console.log(firstDigit);
}

// Last digit
{
  let n = 1238967;
  let lastDigit = n % 10;
  console.log(lastDigit);
}

// Middle digit
{
  let n = 1238967;
  let tempN = n;
  let count = 0;
  while (tempN > 0) {
    count++;
    tempN = Math.floor(tempN / 10);
  }
  let middleIndex = Math.floor(count / 2);
  let middleDigit;
  for (let i = 0; i <= middleIndex; i++) {
    middleDigit = n % 10;
    n = Math.floor(n / 10);
  }
  console.log(middleDigit);
}

// Compare two numbers digit-wise
{
  let n1 = 12345;
  let n2 = 54321;
  let areSame = true;
  while (n1 > 0 && n2 > 0) {
    let digit1 = n1 % 10;
    let digit2 = n2 % 10;
    if (digit1 !== digit2) {
      areSame = false;
      break;
    }
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  if (n1 > 0 || n2 > 0) {
    areSame = false;
  }
  console.log(areSame);
}

// Check all digits same
{
  let n = 11111;
  let lastDigit = n % 10;
  let allSame = true;
  while (n > 0) {
    let digit = n % 10;
    if (digit !== lastDigit) {
      allSame = false;
      break;
    }
    n = Math.floor(n / 10);
  }
  console.log(allSame);
}

// Check increasing digits
{
  let n = 12345;
  let lastDigit = Infinity;
  let isIncreasing = true;
  while (n > 0) {
    let digit = n % 10;
    if (digit >= lastDigit) { // remove = if number has duplicate digits, it is not increasing, eg n = 122345
      isIncreasing = false;
      break;
    }
    lastDigit = digit;
    n = Math.floor(n / 10);
  }
  console.log(isIncreasing);
}

// Check decreasing 
{
  let n = 54321;
  let lastDigit = -Infinity;
  let isDecreasing = true;
  while (n > 0) {
    let digit = n % 10;
    if (digit <= lastDigit) { // remove = if number has duplicate digits, it is not decreasing, eg n = 543321
      isDecreasing = false;
      break;
    }
    lastDigit = digit;
    n = Math.floor(n / 10);
  }
  console.log(isDecreasing);
}

// Digit frequency of k
{
  let k = 2;
  let n = 1238967;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit === k) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// Largest even digit
{
  let n = 1238967;
  let maxEvenDigit = -Infinity;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 0 && digit > maxEvenDigit) {
      maxEvenDigit = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(maxEvenDigit);
}

// Smallest odd digit
{
  let n = 1238967;
  let smallestOddDigit = Infinity;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 1 && digit < smallestOddDigit) {
      smallestOddDigit = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(smallestOddDigit);
}

// Replace digit 0→5
{
  let n = 1020304050;
  let result = 0;
  let multiplier = 1;
  while (n > 0) {
    let digit = n % 10;
    if (digit === 0) {
      digit = 5;
    }
    result = result + digit * multiplier;
    multiplier *= 10;
    n = Math.floor(n / 10);
  }
  console.log(result);
}

// Remove digit k
{
  let k = 2;
  let n = 1238967;
  let result = 0;
  let multiplier = 1;
  while (n > 0) {
    let digit = n % 10;
    if (digit !== k) {
      result = result + digit * multiplier;
      multiplier *= 10;
    }
    n = Math.floor(n / 10);
  }
  console.log(result);
}

// Rotate digits left
{
  let n = 12345;
  let tempN = n;
  let count = 0;
  while (tempN > 0) {
    count++;
    tempN = Math.floor(tempN / 10);
  }
  let multiplier = Math.pow(10, count - 1);
  let firstDigit = Math.floor(n / multiplier);
  let result = (n % multiplier) * 10 + firstDigit;
  console.log(result);
}
// OR
{
  let n = 12345;
  let digits = Math.floor(Math.log10(n)) + 1; // e.g., 5
  let multiplier = Math.pow(10, digits - 1);  // e.g., 10000

  let firstDigit = Math.floor(n / multiplier); // 1
  let remaining = n % multiplier;              // 2345

  let result = (remaining * 10) + firstDigit;
  console.log("Left Rotate:", result);         // 23451
}

// Rotate digits right
{
  let n = 12345;
  let tempN = n;
  let count = 0;
  while (tempN > 0) {
    count++;
    tempN = Math.floor(tempN / 10);
  }
  let multiplier = Math.pow(10, count - 1);
  let lastDigit = n % 10;
  let result = Math.floor(n / 10) + lastDigit * multiplier;
  console.log(result);
}
// OR
{
  let n = 12345;
  let digits = Math.floor(Math.log10(n)) + 1; // e.g., 5 // fastest way to count digits, but only works for n > 0
  let multiplier = Math.pow(10, digits - 1);  // e.g., 10000

  let lastDigit = n % 10;                     // 5
  let remaining = Math.floor(n / 10);         // 1234

  let result = (lastDigit * multiplier) + remaining;
  console.log("Right Rotate:", result);       // 51234
}

// Count prime digits
{
  let n = 1238967;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// Sum prime digits
{
  let n = 1238967;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
      sum += digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(sum);
}

// Check Armstrong
{
  let n = 153;
  let tempN = n;
  let digits = 0;
  while (tempN > 0) {
    digits++;
    tempN = Math.floor(tempN / 10);
  }
  let sum = 0;
  tempN = n;
  while (tempN > 0) {
    let digit = tempN % 10;
    sum += Math.pow(digit, digits);
    tempN = Math.floor(tempN / 10);
  }
  console.log(sum === n);
}

// Check perfect number
{
  let n = 28; // 1, 2, 4, 7, 14 are factors of 28 and their sum is 28
  let sum = 0;
  for (let i = 1; i < n / 2; i++) { // we can also do i <= n/2, but it is not necessary as no number greater than n/2 can be a factor of n, except n itself, and we are not including n in the loop
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log(sum === n);
}

// Sum factorial digits
{
  let n = 145; // 1! + 4! + 5! = 145
  let sum = 0;
  let tempN = n;
  while (tempN > 0) {
    let digit = tempN % 10;
    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
      factorial *= i;
    }
    sum += factorial;
    tempN = Math.floor(tempN / 10);
  }
  console.log(sum === n);
}

// Alternating digit sum
{
  let n = 12345; // 1 - 2 + 3 - 4 + 5 = 3
  let sum = 0;
  let tempN = n;
  let sign = 1;
  while (tempN > 0) {
    let digit = tempN % 10;
    sum += sign * digit;
    sign *= -1; // alternate sign
    tempN = Math.floor(tempN / 10);
  }
  console.log(sum); // Note: This will give the result as if we are processing digits from right to left. If we want to process from left to right, we can first reverse the number and then apply the same logic.
}

// Multiply alternate digits
{
  let n = 12345; // 1 * 3 * 5 = 15
  let product = 1;
  let tempN = n;
  let isAlternate = true;
  while (tempN > 0) {
    let digit = tempN % 10;
    if (isAlternate) {
      product *= digit;
    }
    isAlternate = !isAlternate; // alternate between true and false
    tempN = Math.floor(tempN / 10);
  }
  console.log(product); // Note: This will give the result as if we are processing digits from right to left. If we want to process from left to right, we can first reverse the number and then apply the same logic.
}

// Digit difference sum
{
  let n = 12345; // |1 - 2| + |2 - 3| + |3 - 4| + |4 - 5| = 4
  let sum = 0;
  let tempN = n;
  let lastDigit = tempN % 10;
  tempN = Math.floor(tempN / 10);
  while (tempN > 0) {
    let digit = tempN % 10;
    sum += Math.abs(digit - lastDigit);
    lastDigit = digit;
    tempN = Math.floor(tempN / 10);
  }
  console.log(sum); // Note: This will give the result as if we are processing digits from right to left. If we want to process from left to right, we can first reverse the number and then apply the same logic.
}

// Check repeating digits
{
  let n = 1238967;
  let seenDigits = new Set();
  let hasRepeatingDigits = false;
  while (n > 0) {
    let digit = n % 10;
    if (seenDigits.has(digit)) {
      hasRepeatingDigits = true;
      break;
    }
    seenDigits.add(digit);
    n = Math.floor(n / 10);
  }
  console.log(hasRepeatingDigits);
}

// Count repeating digits
{
  let n = 1238967;
  let digitCount = {};
  while (n > 0) {
    let digit = n % 10;
    digitCount[digit] = (digitCount[digit] || 0) + 1;
    n = Math.floor(n / 10);
  }
  let repeatingDigitCount = 0;
  for (let digit in digitCount) {
    if (digitCount[digit] > 1) {
      repeatingDigitCount++;
    }
  }
  console.log(repeatingDigitCount);
}