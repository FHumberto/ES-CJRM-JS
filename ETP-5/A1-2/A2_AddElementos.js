console.log('\nADICIONANDO ELEMENTOS:');
const paragraph = document.querySelector('p');
const div = document.querySelector('.content');
console.log(div);

const people = ['Jonathan', 'Artorius', 'Turok'];

people.forEach(person =>
{
    div.innerHTML += `<ul>${person}</ul>`
})

//* obtendo e setando os atributos
const link = document.querySelector('a');
link.setAttribute("href", 'http://twitter.com/fhumberto');

console.log('\nMODIFICANDO O CSS INLINE: ');
//! sobrescreve os estilos anteriores.
paragraph.setAttribute('style', 'color: green;')

//* adiciona estilos sem sobreescrever.
paragraph.style.margin = "10px";
console.log(paragraph);
paragraph.style = '';


//? adicionando classes CSS
// paragraph.classList.add("failure");
// paragraph.classList.remove("failure");
// paragraph.classList.add('success');
// paragraph.classList.toogle('test') adiciona se não tiver a classe, e se tiver remove.


//! innerText retorna o texto visível na tela.
//! textContent obtem todo o texto que o elemento contém independente da visibilidade.
const paragraphsAll = document.querySelectorAll("p");
// console.log(paragraphsAll);
paragraphsAll.forEach(paragraph =>
{
    if (paragraph.innerText.includes('failure'))
    {
        paragraph.classList.add('failure');
        console.log(true);
    }
    if (paragraph.innerText.includes('success'))
    {
        paragraph.classList.add('success');
    }
})
