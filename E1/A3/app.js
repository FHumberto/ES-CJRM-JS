// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man'];
console.log(heroes);

// Métodos de arrays
const joinHeroes = heroes.join('-'); //Une os elementos com o ARG informado.
console.log('JOIN:');
console.log(joinHeroes);

const moreHeroes = heroes.concat(['Superman', 'Wolwerine']); //Retorna novo array com os ARG + o array original.
console.log('CONCAT:');
console.log(moreHeroes);

const pushToHeroes = heroes.push('Cyclops', 'Hulk'); //Adiciona os elementos do ARG ao array original.
console.log('PUSH:');
console.log(heroes);

const popHeroes = heroes.pop(); //Remove o ultimo item do array e retorna esse item, modificando o array original.
console.log('POP: ');
console.log(popHeroes);
console.log(heroes);