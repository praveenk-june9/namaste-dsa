// Print 1 to n => 
for (let i = 1; i <= n; i++) {
  console.log(i);
}


// Print n to 1 => 
for (let i = n; i >= 1; i--) {
  console.log(i);
}


// Print even numbers to n => 
for (let i = 0; i <= n; i += 2) {
  console.log(i);
}


// Print odd numbers to n => 
for (let i = 1; i <= n; i += 2) {
  console.log(i);
}


// Sum 1 to n => 
{
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}


// Sum even to n => 
{
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  console.log(sum);
}


// Sum odd to n => 
{
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  console.log(sum);
}


// Count numbers divisible by 3 till n => 
{
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0) {
      count++
    }
  }
  console.log(count);
}


// Count digits in number => 
{
  let tempN = Math.abs(n);
  let count = (tempN === 0) ? 1 : 0;
  while (tempN > 0) {
    count++;
    tempN = Math.floor(tempN / 10);
  }
  console.log(count);
}


// Reverse digits => 
{
  let reversed = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10)
  }
  console.log(reversed);
}


// Sum digits => 
{
  let sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    sum += lastDigit;
    n = Math.floor(n / 10)
  }
  console.log(sum);
}


// Product digits => 
{
  let tempN = Math.abs(n);
  let product = (tempN === 0) ? 0 : 1;
  while (tempN > 0) {
    product *= (tempN % 10);
    tempN = Math.floor(tempN / 10);
  }
  console.log(product);
}


// Largest digit => 
{
  let largest = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    if (lastDigit > largest) {
      largest = lastDigit;
    }
    n = Math.floor(n / 10)
  }
  console.log(largest);
}


// Smallest digit => 
{
  let tempN = Math.abs(n);
  let smallest = (tempN === 0) ? 0 : 9;
  while (tempN > 0) {
    let lastDigit = tempN % 10;
    if (lastDigit < smallest) smallest = lastDigit;
    tempN = Math.floor(tempN / 10);
  }
  console.log(smallest);
}


// Check palindrome number => 
{
  let temp = n;
  let reversed = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    reversed = (reversed * 10) + lastDigit;
    temp = Math.floor(temp / 10);
  }

  console.log(n === reversed);
}


// Print factors => 
{
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}


// Count factors => 
{
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  console.log(count);
}


// Sum factors => 
{
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log(sum);
}


// Prime check => 
{
  let isPrime = true;
  if (n <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  console.log(isPrime);
}


// Count primes till n => 
{
  let count = 0;
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  console.log(count);
}


// Factor Logic (Sum, Count, and Print)
{
  let count = 0;
  let sum = 0;
  let factors = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // Found factor i
      count++;
      sum += i;
      factors.push(i);

      // Found the "partner" factor (n/i)
      // We check if (i !== n/i) to avoid counting square roots twice (like 6x6 for 36)
      if (i !== n / i) {
        count++;
        sum += (n / i);
        factors.push(n / i);
      }
    }
  }
  console.log("Factors:", factors);
  console.log("Count:", count);
  console.log("Sum:", sum);
}


// Prime Check (Highly Optimized)
function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true; // 2 is the only even prime
  if (num % 2 === 0) return false; // Exclude all other evens

  // Start from 3 and skip even numbers (i += 2)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}


// Count Primes till n
{
  let primeCount = 0;
  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      primeCount++;
    }
  }
  console.log(primeCount);
}
