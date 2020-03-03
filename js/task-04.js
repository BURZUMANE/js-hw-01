'use strict'

let credits = 23580;
const pricePerDroid = 3000;

const purchaseCount = prompt('How many droids would you like to purchase?');
const intPurchaseCount = Number(purchaseCount);

if (purchaseCount === null) {
    console.log('Attempt canceled');
} else {
    const intPurchaseCount = Number(purchaseCount);
    let totalPrice = intPurchaseCount * pricePerDroid;
    console.log(totalPrice);
    if (totalPrice <= credits) {
        credits -= totalPrice;
        alert(`Congratulations, you've purchased ${intPurchaseCount} droids. Now you have ${credits} left on your balance`)
    } else {
        alert('Insuficient funds')
    }
}