let userBasket = [
    ['GraficCard MSI', 360, 1],
    ['MotherBoard MSI', 20, 1],
    ['RAM AMD 8GB', 30, 2],
    ['CPU Intel i5 10400', 230, 1],
    ['M2SSD256GBSATA Kingston', 60, 1]
];

let emptyArrForTest = [];

function countBasketPrice(arr) {
    if (!arr.length) return 'Basket is empty'

    let result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i][1];
    }
    return result;
}

res = countBasketPrice(userBasket);
console.log(`Sum of your basket is ${res} USD`);

res = countBasketPrice(emptyArrForTest);
console.log(res);


// Так и не понял как передать элемент двумерного массива в reduce

//     arr.reduce(function(sum, arr[1]) {   -- ?
//         result += sum;
