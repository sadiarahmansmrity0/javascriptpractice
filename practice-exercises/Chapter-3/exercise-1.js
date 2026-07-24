//1. Write a program that prints whether a number is positive, negative, or zero.

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is Positive`);
    } else if (num < 0) {
        console.log(`${num} is Negative`);
    } else {
        console.log("The number is Zero");
    }
}
checkNumber(10);  // Positive
checkNumber(-5);  // Negative
checkNumber(0);   // The number is Zero