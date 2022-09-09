/*
  01
  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

console.log('01:');

const videosTittle = document.querySelector('.videos');
const videosLis = videosTittle.children;

Array.from(videosLis).forEach(li =>
{
  li.classList.add('video');
})

console.log(videosLis);

/*
  02
  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

console.log('\n02:');

const tittleTwo = document.querySelector('h2');
console.log(tittleTwo.offsetParent);

/*
  03
  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

console.log('\n03:');

const tittleOne = document.querySelector('h1');
console.log(tittleOne.nextElementSibling);

/*
  04
  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

console.log('\n04:');

console.log(videosTittle.previousElementSibling);

/*
  05
  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

console.log('\n05:');

Array.from(videosLis).forEach(li =>
{
  li.addEventListener('click', event =>
  {
    console.log(event.target.textContent);
  })
})

/*
  06
  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

console.log('\n06:');

const button = document.querySelector('button');

button.addEventListener('click', () =>
{
  videos.forEach(element =>
  {
    videosTittle.innerHTML += `<li>${element.name}</li>`;

    //? Segunda forma de resolver.
    // let li = document.createElement('li');
    // li.textContent = `${element.name}`
    // videosTittle.appendChild(li);
  })
})

/*
  07
  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

console.log('\n07:');

const body = document.body;

tittleOne.addEventListener('click', () =>
{
  body.innerHTML = '';
  console.log(body);
})