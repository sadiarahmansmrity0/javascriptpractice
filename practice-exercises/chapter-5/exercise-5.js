//5. Write a function applyTwice(fn, value) that returns fn(fn(value)). Test it with a function that doubles a number.

const applyTwice = (fn, value) => fn(fn(value));

const double = (n) => n * 2;

console.log(applyTwice(double, 5)); // double(double(5)) -> double(10) -> Output: 20