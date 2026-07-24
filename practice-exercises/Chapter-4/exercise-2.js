// 2. Compute the sum of numbers from 1 to 100 with a loop, then verify with the formula $n(n+1)/2$.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Loop Sum:", sum); // Output: 5050

// Verification formula:
const n = 100;
const formulaSum = (n * (n + 1)) / 2;
console.log("Formula Sum:", formulaSum); // Output: 5050