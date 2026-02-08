/**
 * ****
 * ****
 * ****
 * ****
 */
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*"
  }
  console.log(row);
}




/**
 * * * * * *
 * * * * *
 * * * * 
 * * * 
 * *
 */
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + " *"
  }
  console.log(row);
}