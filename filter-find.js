const numbers = [5, 13, 7, 41, 79, 30, 5];
const bigNumbers = numbers.filter(Number => Number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);
// console.log(bigNumbers);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'white');
// console.log(whiteItem);



// Filter: shorter modde joto gulare pabe sob gulare akta array er modde dibe jodi sorto onoshare aktare pay aktarei dibe jodi kew re na pay undifined dibe!!

// Find:shorto onoshare ak ba akadik thakleo prothom tare dibe abong element akare dibe ar jodi shortor er modde na thake tahole undifined dibe!!



const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);



