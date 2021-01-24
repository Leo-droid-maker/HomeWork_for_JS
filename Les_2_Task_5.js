let addition = function (firstNum, secondNum) {
    return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
}

let subtraction = function (firstNum, secondNum) {
    return `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
}

let multiplication = function (firstNum, secondNum) {
    return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
}

let division = function (firstNum, secondNum) {
    return `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
}

console.log(addition(10, 15));
console.log(subtraction(20, 4));
console.log(multiplication(9, 9));
console.log(division(6, 2));

