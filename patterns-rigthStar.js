/**
 * • • • • *
 * • • • * *
 * • • * * *
 * • * * * *
 * * * * * *
 */
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  // console.log(`i loop: ${row}`);

  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " • "
    // console.log(`j loop: ${row}`);

  }

  for (let k = 0; k < i + 1; k++) {
    row = row + " * "
    // console.log(`k loop: ${row}`);

  }
  console.log(row);
}




/**
 * ____*
 * ___* *
 * __* * *
 * _* * * *
 * * * * * *
 */
let m = 5;
for (let i = 0; i < m; i++) {
  let row = "";
  for (let j = 0; j < m - (i + 1); j++) {
    row = row + "_"
  }

  for (let k = 0; k < i + 1; k++) {
    row = row + "*"
  }
  console.log(row);
}