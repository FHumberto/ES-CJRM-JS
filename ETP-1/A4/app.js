// Operadores de comparação
const age = 31;
const nName = 'humberto';

console.log(age == 31);
console.log(age == 35);
console.log(age > 31);
console.log(age < 32);
console.log(age <= 31);
console.log(age >= 31);

console.log(nName > 'Roger');


console.log(age == '31');
console.log('\nCOMPARAÇAO ESTRITA:');
console.log(age === 31);
console.log(age === '31');


console.log('\n');
// Conversão de tipos
let score = '100';
score = Number(score);

console.log(score + 1);
console.log(typeof score); // verifica o tipo de uma variável

//Verificão
console.log('\nINCLUDE: ');
const guilds = ['Rakdos', 'Dimir', 'Boros', 'Grul', 'Simic'];
console.log(guilds);
console.log('INCLUI "Dimir?" ' + guilds.includes('Dimir'));

const evenNumbers = [0, 2, 4, 6, 8, 10] // quando o indexOf não acha o elemento informado retorna -1.
console.log(evenNumbers.indexOf(8) !== -1);