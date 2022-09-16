console.log('\n»»»»»» SORT ««««««\n');
//* Ordenando String em Ordem Alfabética
const names = ['Christian', 'Alfedro', 'Edson'];
names.sort(); //! O sort modifica o array original.

console.log('\nSORT NUMEROS:');
//* Ordenando Numeros
const scores = ['10', '50', '20', '5', '35', '70', '45'];
scores.sort((score1, score2) => score2 - score1); //! decrecente
console.log('Decrescente:');
console.log(scores);

scores.sort((score1, score2) => score1 - score2); //! crescente
console.log('Crescente:');
console.log(scores);

console.log('\nSORT OBJETOS:');
//* Ordenando Objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: "Bebel", score: 30 },
  { name: "Agostinho ", score: 70 }
]

//! forma simples
// theBigFamily.sort((item1, item2) =>
// {
//   if (item1.score > item2.score)
//   {
//     return -1;
//   }
//   else if (item1.score < item2.score)
//   {
//     return +1;
//   }
//   return 0;
// });

//! forma melhorada (ORDENANDO DE FORMA DECRECENTE)
theBigFamily.sort((item1, item2) => item2.score - item1.score);
console.log(theBigFamily);