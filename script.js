"use strict";

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button class="removeFromCart-btn" data-id_product="${good.id_product}">Убрать из корзины</button>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    removeFromCartBtn: null,
    goods: [],

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartListBlock.addEventListener('click', (event) => { this.checkRemoveFromCartBtn(event) });
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.cartListBlock.textContent = 'Товары в корзине: ';
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML(
                'beforeend', `В корзине ${this.countCartQuantity()} позиций(а) стоимостью ${this.countCartPrice()} USD`
            );
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    countCartPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    },
    countCartQuantity() {
        return this.goods.reduce((totalQuantity, cartItem) => totalQuantity += cartItem.quantity, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

    checkRemoveFromCartBtn(event) {
        if (!event.target.classList.contains('removeFromCart-btn')) return;
        const goodToRemoveId = +event.target.dataset.id_product;
        const good = this.goods.find(good => good.id_product === goodToRemoveId);
        this.funcToRemoveFromCart(good);
    },

    funcToRemoveFromCart(good) {
        this.goods.pop(good);
        this.render();
    },

    addGoodsToCart(good) {
        this.goods.push({ ...good, quantity: 1 });
        this.render();
    }
};

// ----------------------------------------------------------------------------

const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Артикул</b>: ${good.id_product}</div>
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="addToCart-btn" data-id_product="${good.id_product}">Добавить в корзину</button>
                </div>`;
    }
}

const catalog = {
    catalogListBlock: null,
    addToCartButton: null,
    catalogItem,
    cart,
    goods: [
        {
            id_product: 123,
            product_name: 'GraficCard MSI',
            price: 360
        },
        {
            id_product: 456,
            product_name: 'MotherBoard MSI',
            price: 20
        },
        {
            id_product: 234,
            product_name: 'RAM AMD 8GB',
            price: 30
        },
        {
            id_product: 623,
            product_name: 'CPU Intel i5 10400',
            price: 230
        },
        {
            id_product: 124,
            product_name: 'M2SSD256GBSATA Kingston',
            price: 60
        }
    ],

    init() {
        this.catalogListBlock = document.querySelector('.catalog');
        this.catalogListBlock.addEventListener('click', (event) => { this.checkAddToCartBtn(event) });

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(good));
            });
        }
    },

    checkAddToCartBtn(event) {
        if (!event.target.classList.contains('addToCart-btn')) return;
        const goodId = +event.target.dataset.id_product;
        const good = this.goods.find(good => good.id_product === goodId);
        this.addToCart(good);
    },

    addToCart(good) {
        this.cart.addGoodsToCart(good);

    }

}


cart.init();
catalog.init();
