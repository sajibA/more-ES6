// 1.let and const
const hubby = 'Omor sani';
let phone = 'Iphone 19';
phone = 'Samsung Galaxy s14';
// 2.default perameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3.template string
const myNotes = `I am mojon of ${hubby}. I dont have ${phone}.`
console.log(myNotes);

// 4.arrow function
const square = x => x * x;
console.log(square(9));