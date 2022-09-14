/*
  01
  - Insira apenas o css do bootstrap no index.html.
*/

console.log('01:');

/*
  02
  - Após um segundo e meio do carregamento da página, exiba no console a
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

console.log('\n02:');
setTimeout(function ()
{
  console.log('Um segundo e meio se passaram desde que a página foi carregada.');
}, 1500)

/*
  03
  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

console.log('\n03:');

const initButton = document.querySelector('.button-init-counter');
const stopButton = document.querySelector('.button-stop-counter');
const counterDisplay = document.querySelector('.counter-container');
let counterAction = true;
let counter = 0;

initButton.addEventListener("click", function ()
{
  counterAction = true;
  const counterIn = setInterval(() =>
  {
    if (counterAction === false)
    {
      clearInterval(counterIn);
    }
    counterDisplay.textContent = `${counter}`;
    ++counter;
  }, 1000)
})

stopButton.addEventListener("click", () =>
{
  counterAction = false;
  counter = 0;
})