/**
 * ******
 * *    *
 * *    *
 * *    *
 * *    *
 * ******
 */


for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    if (i == 0 || j == 0 || i == 5 - 1 || j == 5 - 1) {
      str += "*"
    } else {
      str += " "
    }
  }
  console.log(str);
}