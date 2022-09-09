/*
  01
  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

console.log('01:');
let tittle = document.querySelector('h1');
tittle.textContent = tittle.textContent.toUpperCase();

/*
  02
  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55]
console.log('\n02:');

let numbersList = document.querySelector('.numbers');
console.log(numbersList);

numbers.forEach(number =>
{
  numbersList.innerHTML += `<li class="number">${number}</li>`
})

/*
  03
  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

console.log('\n03:');

const lis = document.querySelectorAll('.number');

lis.forEach(li =>
{
  const isEven = Number(li.textContent) % 2 === 0;

  (isEven) ? li.classList.add('liLightBlue') : li.classList.add('liPink');
})

/*
  04
  - Adicione a classe "body-background" no corpo do index.html;
*/

console.log('\n04:');
const bodyRef = document.body;
bodyRef.classList.add('body-background');

/*
  05
  - Adicione o link do seu github no href do link do index.html.
*/

console.log('\n05:');
const gitLinkRef = document.querySelector('.link');
gitLinkRef.setAttribute("href", "https://github.com/FHumberto");

/*
  06
  - Exiba o novo valor do atributo href do link no console.
*/

// console.log(gitLinkRef.attributes.href);
console.log(gitLinkRef.getAttribute("href"));

/*
  07
  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log('\n07:');

console.log(tittle.style);

/*
  08
  - Remova a classe "body-background", do elemento body.
*/

console.log('\n08:');
bodyRef.classList.remove('body-background');

/*
  09
  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

console.log('\n09:');

gitLinkRef.classList.toggle('link');