// 1. Write a function isEven(n) that returns true or false, then use it inside a loop from 1 to 10.

const isEven = (n) => n % 2 === 0;

for (let i = 1; i <= 10; i++) {
    console.log(`${i} is even? ${isEven(i)}`);
}