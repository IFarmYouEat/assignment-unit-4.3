console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    basket.push(item);
    return true;
}

function listItems(cart){
    for(let item of cart){
        console.log(item);
    }
}

// Testing functions addItem
console.log(`Basket now contains ${basket}`);
console.log(`Basket is now going to add 'chicken'`, addItem('chicken'));
console.log(`Basket now contains ${basket}`);
addItem('pasta');
addItem('milk');

function empty(cart){
    for(let i = cart.length; i > 0; i --){
        console.log(cart.pop())
    }
}

console.log(basket);

console.log(`Testing listItems expect each item in the basket to appear on a separate line`);

listItems(basket);

console.log(`Testing function 'empty' expect each item to appear in reverse order as it is removed`)
empty(basket);
console.log(basket);


function isFull(trolley){
    if(trolley.length >= maxItems){
        return true;
    }else if (trolley.length < maxItems){
        return false;
    }
}

console.log(`testing to see if function isFull will return (true if items are equal to or greater than 5)`)
console.log(isFull(basket));
addItem('chicken');
addItem('pasta');
addItem('milk');
console.log(`3 items in basket, expect false`, isFull(basket));
addItem('pasta');
addItem('milk');
console.log(`5 items in basket, expect true`, isFull(basket));





// DO NOT MODIFY
// Used for automated testing
// try {
//     module.exports = {
//         basket: typeof basket !== 'undefined' ? basket : undefined,
//         addItem: typeof addItem !== 'undefined' ? addItem : undefined,
//         listItems: typeof listItems !== 'undefined' ? listItems : undefined,
//         maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
//         empty: typeof empty !== 'undefined' ? empty : undefined,
//         isFull: typeof isFull !== 'undefined' ? isFull : undefined,
//         removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
//     };
// } catch(e) {
//     // Do nothing
// }
