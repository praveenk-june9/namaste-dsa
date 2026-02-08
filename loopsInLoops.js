for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}
/**
 * 
 * i=0, j=0 => 0,0
 * i=1, j=1 => 1,1
 *      j=0 => 1,0
 * i=2, j=2 => 2,2
 *      j=1 => 2,1
 *      j=0 => 2,0
 * 
 */




for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
/**
 * 
 * i=5, j=0 => 5,0
 *      j=1 => 5,1
 *      j=1 => 5,2
 *      j=1 => 5,3
 *      j=1 => 5,4
 * i=4, j=0 => 4,0
 *      j=1 => 4,1
 *      j=2 => 4,2
 *      j=3 => 4,3
 * i=3, j=0 => 3,0
 *      j=1 => 3,1
 *      j=2 => 3,2
 * i=2, j=0 => 2,0
 *      j=1 => 2,1
 * i=1, j=0 => 1,0
 * 
 */


let i;
let j;
let n = 5;
for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}