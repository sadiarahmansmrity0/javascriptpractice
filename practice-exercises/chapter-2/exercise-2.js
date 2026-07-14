//2. Predict the output of console.log(typeof null) then run it and search the web for why the answer is surprising.

//Prediction: It should logically be "null".
console.log(typeof null);
//Actual Output: "object"

//Explanation: This is a well-known, historic bug from the very first version of JavaScript. Values were stored in 32-bit units with a type tag. The object tag was 000, and since null was represented as the null pointer (all zeros), typeof null erroneously returned "object". It was never fixed to avoid breaking legacy websites.