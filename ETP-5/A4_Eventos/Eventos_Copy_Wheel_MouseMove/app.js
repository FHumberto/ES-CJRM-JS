const paragraph = document.querySelector('.copy-me')

//* quando o elemento é copiado. Ctrl + C ou com o Mouse.
paragraph.addEventListener('copy', () =>
{
    console.log('Texto copiado!');
})

const div = document.querySelector('.box');

//* quando o mouse é movimentado dentro do elemento da referência.
div.addEventListener('mousemove', event =>
{
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
    console.log(event.offsetX, event.offsetY);
})

//* quando rola a página.
document.addEventListener('wheel', event =>
{
    console.log(event.pageX, event.pageY);
})