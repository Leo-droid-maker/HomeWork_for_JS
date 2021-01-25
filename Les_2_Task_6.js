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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return addition(arg1, arg2);
        case '-': return subtraction(arg1, arg2);
        case '*': return multiplication(arg1, arg2);
        case '/': return division(arg1, arg2);
        default: return `Incorrect operation!`;
    }
}

console.log(mathOperation(2, 2, '+'));
console.log(mathOperation(10, 2, '-'));
console.log(mathOperation(-2, 8, '*'));
console.log(mathOperation(9, 3, '/'));
console.log(mathOperation(2, 2, 'asdasd'));

