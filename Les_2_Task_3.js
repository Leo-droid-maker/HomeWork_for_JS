let a = Math.floor(Math.random() * (10 - -10) - 10);
let b = Math.floor(Math.random() * (10 - -10) - 10);

console.log(a, b);

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}
