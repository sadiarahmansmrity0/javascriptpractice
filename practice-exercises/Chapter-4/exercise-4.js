//4. Print a 5-row pyramid of stars using nested loops. 

for (let row = 1; row <= 5; row++) {
    let spaces = " ".repeat(5 - row);
    let stars = "*".repeat(2 * row - 1);
    console.log(spaces + stars);
}
/* Output:
    *
   ***
  *****
 *******
*********
*/