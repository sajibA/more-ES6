const fish = { Id: 58, name: 'king hilsha', price: 900, phone: '017766557855', address: 'chadpur', dress: 'silver' };

const phone = fish.phone;
const price = fish.price;

const { phone, Id, price, dress } = fish;

console.log(price);

// destructuring

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