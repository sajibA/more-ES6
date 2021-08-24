const numbers = [4, 6, 8, 10];
const output2 = [];

const dobuleIt = number => number * 2;


for (const number of numbers) {
    const result = dobuleIt(number);
    output2.push(result);

};
// console.log( output2);


// 1.loop through each element
// 2.for each element call the provided function
// 3.result for each element will be stored in an array

// const output = numbers.map(dobuleIt);
const output = numbers.map(x => x * 2);
consol.log(output);

const squares = numbers.map(number => number * number);
// console.log(squares);