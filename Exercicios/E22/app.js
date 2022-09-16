/*
  01
  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário']

console.log('01:');
const orderedNames = names.map((name => name)).sort();
console.log(names, orderedNames);

/*
  02
  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]

console.log('\n02:');
console.log(characters);

const orderedCharacters = (characters.map(character => character).sort((id1, id2) => id1.id - id2.id));
console.log(orderedCharacters);

/*
  03
  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]

console.log('\n03:');
console.log(numbers);

const orderedNumbers = (numbers.map(number => number).sort((number1, number2) => number1 - number2));
console.log(orderedNumbers);

/*
  04
  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

console.log('\n04:');

console.log(randomNumbers.find(number => number > 50));

/*
  05
  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']

console.log('\n05:');

const orderedPeople = (people.map(person => person).sort().reverse())
console.log(orderedPeople);


/*
  06
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido,
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

console.log('\n06:');

console.log(ingredients.reduce((acc, element) => { return acc + `${element} cozido, ` }, ''));

/*
  07
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

console.log('\n07:');

const disneyMoviesAmount = topBrazilMovies
  .filter(movie => movie.distributedBy === 'Disney')
  .reduce((acc, item) => acc += item.peopleAmount, 0);

console.log(disneyMoviesAmount);

/*
  08
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

console.log('\n08:');

const dogs = pets
  .filter(pet => pet.type === "Dog")
  .map(dog => ({ name: dog.name, age: dog.age * 7, gender: dog.gender, type: dog.type }));

console.log(dogs);

/*
  09
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira
    os nomes dos filmes na ul do index.html.
*/

console.log('\n09:');

const moviesNames = topBrazilMovies
  .map(movie => `<li>${movie.title}</li>`)
  .join('')
//! FORMA ALTERNATIVA
//* topBrazilMovies.reduce(acc, movie) => acc + `<li>${movie.title}</li>`, '')


const movieListUl = document.querySelector('.list-group');
movieListUl.innerHTML = moviesNames;