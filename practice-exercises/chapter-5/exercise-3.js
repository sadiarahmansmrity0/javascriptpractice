//3. Write a function max3(a, b, c) that returns the largest of three numbers without using Math.max.

function max3(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}
console.log(max3(12, 45, 23)); // Output: 45