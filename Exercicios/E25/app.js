/*
  01
  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

console.log('01:');
console.log(months.indexOf('Fevereiro'));

/*
  02
  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

console.log('\n02:');

const present = new Date();
console.log(present);

/*
  03
  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log('\n03:');

console.log(present.getFullYear());

/*
  04
  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

console.log('\n04:');

const past = new Date(2020, 3, 19, 10, 22, 14);
console.log(past);

/*
  05
  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log('\n05:');

console.log(past.getHours());

/*
  06
  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const future = new Date(2040, 3, 19, 5, 10, 22, 42);
console.log(future);

/*
  07
  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const difference = future.getTime() - past.getTime();
const differenceInDays = Math.round(difference / 1000 / 60 / 60 / 24);
console.log(differenceInDays);