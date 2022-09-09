/*
1 » obter a referencia do elemento.
2 » adicionar um event listener no elemento.
3 » implementar uma func de callback quando o click acontecer.
*/

const button = document.querySelector('button');

button.addEventListener('click', () =>
{
    const li = document.createElement("li"); //! cria um elemento
    li.textContent = "Novo Item";
    ul.append(li); //! adiciona o elemento no argumento como ultimo filho.
})

const ul = document.querySelector('ul');

// ul.remove(); //! remove um elemento

const list = document.querySelectorAll('li');

// adiciona um listener para cada elemento <li>
list.forEach(li =>
{
    li.addEventListener("click", event =>
    {
        // console.log(event.target);
        const clickedElement = event.target;

        // clickedElement.style.textDecoration = 'line-through';
    })
})


//* o evento é sempre propagado do elemento atual, até chegar no topo. event budling.

// event.stopPropagation() // para a propagação do evento apra os eventos pais.