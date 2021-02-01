// let userBasket = [
//     ['GraficCard MSI', 360, 1],
//     ['MotherBoard MSI', 20, 1],
//     ['RAM AMD 8GB', 30, 2],
//     ['CPU Intel i5 10400', 230, 1],
//     ['M2SSD256GBSATA Kingston', 60, 1]
// ];


const userBasket = {

    namesOfGoods: [
        { name: 'GraficCard MSI' },
        { name: 'MotherBoard MSI' },
        { name: 'RAM AMD 8GB' },
        { name: 'CPU Intel i5 10400' },
        { name: 'M2SSD256GBSATA Kingston' }
    ],

    pricesOfGoods: [
        { price: 360 },
        { price: 20 },
        { price: 30 },
        { price: 230 },
        { price: 60 }
    ],

    quantitysOfGoods: [
        { quantity: 1 },
        { quantity: 1 },
        { quantity: 2 },
        { quantity: 1 },
        { quantity: 1 }
    ],

    countBasketPrice() {
        return this.pricesOfGoods.reduce((sum, res) => sum += res.price, 0);
    }
};


console.log(userBasket.countBasketPrice());
console.log(userBasket.namesOfGoods[0], userBasket.pricesOfGoods[0], userBasket.quantitysOfGoods[0]);
