//*  map é usado quando se quer retornar um NOVO array modificado.
console.log('MÉTODO MAP:');
console.log('Usado quando se quer retornar um NOVO array modificado');
const numbers = ['1', '2', '3'];
const doubleNumbers = numbers.map(item => item * 2); //! NÃO ALTERA O ARRAY ORIGINAL
console.log(doubleNumbers, numbers);

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product =>
{
  if (product.price >= 30)
  {
    return { name: product.name, price: product.price / 2 };
  }
  return product; //! O método sempre deve retornar.
})

console.log(products, saleProducts);

//* filter é usado quando precisa retornar um array com só alguns elementos.
console.log('\nFILTER:');
console.log('Usado quando precisa retornar um array com elementos filtrados.');
const randomNumbers = [36, 99, 37, 63];
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);
console.log(randomNumbers, numbersGreaterThan37);

console.log('\nFILTRA e retorna somente os usuários premium');

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium);
console.log(users, premiumUsers);

//* é usado quando precisa reduzir o array a algum outro tipo de dado.
console.log('\nREDUCE:');
console.log('Usado para reduzir o array a algum outro tipo de dado.');

const anotherNumbers = [1, 2, 3];

const sumResult = anotherNumbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(`\n${anotherNumbers} Array REDUZIDO: ${sumResult}`);