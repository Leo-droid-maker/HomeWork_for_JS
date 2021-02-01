"use strict";


function getObject(someNumber) {
    someNumber = (([someNumber].toString()).split('')).map(function (element) {
        return parseInt(element);
    });

    const lengthOfSomeNumbers = someNumber.length;

    let obj = {
        hundreds: 0,
        tens: 0,
        ones: 0
    };

    if (lengthOfSomeNumbers > 3) {
        console.log('Your number is over than 999');
        obj = {};
    }


    switch (lengthOfSomeNumbers) {
        case 3:
            obj.hundreds = someNumber[0];
            obj.tens = someNumber[1];
            obj.ones = someNumber[2];
            break;
        case 2:
            obj.tens = someNumber[0];
            obj.ones = someNumber[1];
            break;
        case 1:
            obj.ones = someNumber[0];
            break;
    }

    return obj;

}

console.log(getObject(1));
console.log(getObject(1000));
console.log(getObject(759));
console.log(getObject(22));
