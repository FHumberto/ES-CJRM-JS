const formAddTodo = document.querySelector('.form-add-todo');
const todoContainer = document.querySelector('.todos-container');
const formSearch = document.querySelector('.form-search');

const addTodo = inputValue =>
{
  if (inputValue.length)
  {
    todoContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
    </li >`

    event.target.reset(); //* limpa o campo.
  }
}

//* adicionar elementos
formAddTodo.addEventListener('submit', event =>
{
  event.preventDefault();

  const inputValue = event.target.add.value.trim(); //* trim remove espaços em branco antes e depois do texto.
  addTodo(inputValue);
});

//? ISOLANDO EM FUNÇÃO DE RESPOSABILIDADE ÚNICA
const removeTodo = clickedElement =>
{
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) //? verifica se o elemento tem o data-trash
  {
    todo.remove();
  }
}

//* remover elementos
todoContainer.addEventListener('click', event =>
{
  const clickedElement = event.target;
  removeTodo(clickedElement);
})

const hideToDos = (toDos, inputValue) =>
{
  toDos //* transforma em array os elementos filhos.
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue)) //* retorna os elementos que não batem com a busca.
    .forEach(todo =>
    {
      todo.classList.remove('d-flex');
      todo.classList.add('hidden');
    }) //* adiciona o CSS para ocultar.
}

const showToDos = (toDos, inputValue) =>
{
  toDos //* transforma em array os elementos filhos.
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue)) //* retorna os elementos que não batem com a busca.
    .forEach(todo =>
    {
      todo.classList.remove('hidden');
      todo.classList.add('d-flex');
    }) //* adiciona o CSS para ocultar.
}

//* buscar elementos
formSearch.addEventListener("input", event =>
{
  event.preventDefault();
  const inputValue = event.target.value.trim().toLowerCase();
  const toDos = Array.from(todoContainer.children);

  //! OCULTA OS ELEMENTOS
  hideToDos(toDos, inputValue);

  //! MOSTRA NOVAMENTE OS ELEMENTOS
  showToDos(toDos, inputValue);
})