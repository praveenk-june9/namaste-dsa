// *****
// *****
// *****
// *****
// *****
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "*"
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *
// **
// ***
// ****
// *****
{
  const n = 5;

  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 1
// 12
// 123
// 1234
// 12345
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < i + 1; j++) {
      str += j + 1;
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 1
// 22
// 333
// 4444
// 55555
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < i + 1; j++) {
      str += i + 1;
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *****
// ****
// ***
// **
// *
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < n - i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 12345
// 1234
// 123
// 12
// 1
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < n - i; j++) {
      str += j + 1;
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



//     *    
//    ***   
//   *****  
//  ******* 
// *********
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    for (let m = 0; m < n - i - 1; m++) {
      str += " ";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// ____*____
// ___***___
// __*****__
// _*******_
// *********
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < n - i - 1; j++) {
      str += "_";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    for (let m = 0; m < n - i - 1; m++) {
      str += "_";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *********
//  ******* 
//   *****  
//    ***   
//     *   
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      str += "*";
    }
    for (let m = 0; m < i; m++) {
      str += " ";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



//     *    
//    ***   
//   *****  
//  ******* 
// *********
// *********
//  ******* 
//   *****  
//    ***   
//     *    
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    for (let m = 0; m < n - i - 1; m++) {
      str += " ";
    }
    console.log(str);
  }
  for (let i = 0; i < n; i++) {
    let str = ""
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      str += "*";
    }
    for (let m = 0; m < i; m++) {
      str += " ";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
{
  const n = 5;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let str = "";
    let starsConditions = i;
    if (i > n) starsConditions = 2 * n - i
    for (let j = 1; j <= starsConditions; j++) {
      str += "*";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 1
// 01
// 101
// 0101
// 10101
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    let toggle = i % 2 === 0 ? 1 : 0;
    for (let j = 0; j < i + 1; j++) {
      str += toggle;
      toggle = 1 - toggle
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 1      1
// 12    21
// 123  321
// 12344321
{
  const n = 4;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    let spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    for (let j = i; j >= 1; j--) {
      str += j;
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 1
// 23
// 456
// 78910
// 1112131415
{
  const n = 5;
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += num;
      num++
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// A
// AB
// ABC
// ABCD
// ABCDE
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str = str + String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// ABCDE
// ABCD
// ABC
// AB
// A
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str = str + String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// A
// BB
// CCC
// DDDD
// EEEEE
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str = str + String.fromCharCode(65 + i);
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



//     A    
//    ABC   
//   ABCDE  
//  ABCDEFG 
// ABCDEFGHI
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    // spaces
    for (let j = 0; j < n - 1 - i; j++) {
      str = str + " ";
    }
    // letters
    for (let j = 0; j < 2 * i + 1; j++) {
      str = str + String.fromCharCode(65 + j);
    }
    // spaces
    for (let j = 0; j < n - 1 - i; j++) {
      str = str + " ";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



//     A    
//    ABA   
//   ABCBA  
//  ABCDCBA 
// ABCDEDCBA
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    // spaces
    for (let j = 0; j < n - 1 - i; j++) {
      str = str + " ";
    }
    // letters
    let charCode = 65;
    for (let j = 0; j < 2 * i + 1; j++) {
      str = str + String.fromCharCode(charCode);
      if (j < i) {
        charCode++;
      } else {
        charCode--;
      }
    }
    // spaces
    for (let j = 0; j < n - 1 - i; j++) {
      str = str + " ";
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// E
// DE
// CDE
// BCDE
// ABCDE
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    let charCode = 65 + n - 1 - i;
    for (let j = 0; j < i + 1; j++) {
      str = str + String.fromCharCode(charCode);
      charCode++
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    // stars
    for (let j = 0; j < n - i; j++) {
      str += "*"
    }
    // spaces
    for (let j = 0; j < 2 * i; j++) {
      str += " "
    }
    // stars
    for (let j = 0; j < n - i; j++) {
      str += "*"
    }
    console.log(str);
  }
  for (let i = 0; i < n; i++) {
    let str = "";
    // stars
    for (let j = 0; j < i + 1; j++) {
      str += "*"
    }
    // spaces
    for (let j = 0; j < 2 * (n - i - 1); j++) {
      str += " "
    }
    // stars
    for (let j = 0; j < i + 1; j++) {
      str += "*"
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    // stars
    for (let j = 0; j < i + 1; j++) {
      str += "*"
    }
    // spaces
    for (let j = 0; j < 2 * (n - i - 1); j++) {
      str += " "
    }
    // stars
    for (let j = 0; j < i + 1; j++) {
      str += "*"
    }
    console.log(str);
  }

  for (let i = 0; i < n - 1; i++) {
    let str = "";
    // stars
    for (let j = 0; j < n - 1 - i; j++) {
      str += "*"
    }
    // spaces
    for (let j = 0; j < 2 * i + 2; j++) {
      str += " "
    }
    // stars
    for (let j = 0; j < n - 1 - i; j++) {
      str += "*"
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// *****
// *   *
// *   *
// *   *
// *****
{
  const n = 5;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
        str += "*"
      } else {
        str += " "
      }
    }
    console.log(str);
  }
}
console.log("==================== END OF PATTERN ====================");



// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444
{
  const n = 4;
  const size = (2 * n) - 1; // 7

  for (let i = 0; i < size; i++) {
    let str = "";
    for (let j = 0; j < size; j++) {
      // Find the minimum distance to any edge
      let top = i;
      let left = j;
      let right = (size - 1) - j;
      let bottom = (size - 1) - i;

      let minDist = Math.min(top, bottom, left, right);
      // console.log(top, bottom, left, right);
      // console.log(minDist);

      // Value is n minus the distance from the closest edge
      str += (n - minDist);
    }
    console.log(str);
  }
}


