// 2. Given a temperature variable, print 'Hot' above 32, 'Pleasant' between 20 and 32, otherwise 'Cold'.

let temp = 25;

if (temp > 32) {
    console.log("Hot");
} else if (temp >= 20 && temp <= 32) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}