console.log('\nFOREACH E CALLBACKS: ');

// Função que chama ela mesma.
// const myFunc = callback =>
// {
//     const value = 77;
//     callback(value);
// }

myFunc((number) =>
{
    console.log(number);
});


// ForEach
const socialNetwork = ['youtube', 'twitter', 'instagram', 'facebook'];

socialNetwork.forEach((socialNetwork) =>
{
    console.log(socialNetwork);
})

const ul = document.querySelector('[data-js="ul"]');

// Utilizando o foreach e o Callback para preencher um UL.
let htmlTemplate = '';

socialNetwork.forEach(socialNetwork =>
{
    htmlTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = htmlTemplate;