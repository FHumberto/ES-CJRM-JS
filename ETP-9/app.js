const formAddTodo = document.querySelector('.form-add-todo');
const todoContainer = document.querySelector('.todos-container');
const formSearch = document.querySelector('.form-search');

//* adicionar elementos
formAddTodo.addEventListener('submit', event =>
{
  event.preventDefault();

  const inputValue = event.target.add.value.trim(); //* trim remove espaços em branco antes e depois do texto.
  if (inputValue.length)
  {
    todoContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
    </li >`

    event.target.reset(); //* limpa o campo.
  }
  console.log(event.target.add.value);
});


//* remover elementos
todoContainer.addEventListener('click', event =>
{
  const clickedElement = event.target;
  if (clickedElement.classList.contains('delete')) //* checka se clicou em deletar
  {
    clickedElement.parentElement.remove();
  }
})

//* buscar elementos
formSearch.addEventListener("input", event =>
{
  event.preventDefault();
  const inputValue = event.target.value.trim().toLowerCase();

  //! OCULTA OS ELEMENTOS
  Array.from(todoContainer.children) //* transforma em array os elementos filhos.
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue)) //* retorna os elementos que não batem com a busca.
    .forEach(todo =>
    {
      todo.classList.remove('d-flex');
      todo.classList.add('hidden');
    }) //* adiciona o CSS para ocultar.

  //! MOSTRA NOVAMENTE OS ELEMENTOS
  Array.from(todoContainer.children) //* transforma em array os elementos filhos.
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue)) //* retorna os elementos que não batem com a busca.
    .forEach(todo =>
    {
      todo.classList.remove('hidden');
      todo.classList.add('d-flex');
    }) //* adiciona o CSS para ocultar.
})