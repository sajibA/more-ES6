// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(b);

// destructuring array
const [p, q] = [45, 37];
console.log(p, q);

// chaining

const company = {
    name: 'Gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website devolopment',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }

    }
}

console.log(company?.web?.tech?.third);
console.log(company?.phone?.tech?.first);
// (? diya mane jodi object na pay tahole ar bitorer dike jabe na)