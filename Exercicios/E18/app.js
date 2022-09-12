/*
  01
  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter:
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

console.log('01:');

const pattern = /^[a-zA-Z]{6,}$/;
const usernameField = document.getElementById('username');
const usernameFeedBack = document.createElement('p');
const paragraphFB = usernameField.insertAdjacentElement("afterend", usernameFeedBack);

usernameField.addEventListener('keyup', (e) =>
{
  isUserValid = pattern.test(e.target.value);
  if (isUserValid)
  {
    paragraphFB.textContent = 'Username válido =)';
    paragraphFB.setAttribute('Class', 'username-success-feedback');
  }
  else
  {
    paragraphFB.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e / ou minúsculas';
    paragraphFB.setAttribute('Class', 'username-help-feedback');
  }
  e.stopPropagation();
})


/*
  02
  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um parágrafo verde abaixo do botão
  com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

console.log('\n02:');
const form = document.querySelector('form');
const formFeedBack = document.createElement('fp');
const paragraphForm = form.insertAdjacentElement('afterend', formFeedBack);

console.log(paragraphForm);

form.addEventListener('submit', (e) =>
{
  e.preventDefault();
  isUserValid = pattern.test(e.target.username.value);

  if (isUserValid)
  {
    paragraphForm.textContent = 'Dados enviados =)';
    paragraphForm.setAttribute('Class', "submit-success-feedback");
  }
  else
  {
    paragraphForm.textContent = 'Por favor, insira um username válido';
    paragraphForm.setAttribute('Class', 'submit-help-feedback');
  }
})

/*
  03
  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa
        6;
    2) Pesquisar no MDN.
*/

console.log('03:');

const some = (array, func) =>
{
  for (let i = 0; i < array.length; i++)
  {
    if (func(array[i]))
    {
      return true;
    }
  }
}

console.log(some([1, 2, 3], item => item === 2));