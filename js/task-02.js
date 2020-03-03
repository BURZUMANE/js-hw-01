'use strict'
const ordered = prompt('How many pieces do you need? ');
const intOrdered = Number(ordered);

const total = 100;

if (intOrdered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно твоаров!')
}