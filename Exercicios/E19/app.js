/*
Este exercício será um pouquinho diferente dos anteriores.
Seu desafio é desenvolver uma versão do quiz que:
- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D
Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.
É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

console.log('01:');

const form = document.querySelector('.quiz-form');

const correctAnswers = ['A', 'B', 'A', 'A'];

form.addEventListener('submit', event =>
{
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswers, index) =>
  {
    if (userAnswers === correctAnswers[index])
    {
      score += 25;
    }
  })
  alert(`Sua pontuação foi de ${score}%`);
})