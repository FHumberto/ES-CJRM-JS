/*
03 - Para certificar-se que este arquivo realmente está linkado, exiba a frase  
"JS is Awesome!" em um alert no browser.
*/

// alert("JS is Awesome!");

/*
05 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4
dígitos. Ex.: 1930.
06 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.
07 - Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser.
*/

let date = new Date();
const myBirthYear = 1991;
const currentYear = date.getFullYear();

console.log(myBirthYear, currentYear);

/*
08 - Experimente.
- Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu
nascimento. Mas sem digitar os números manualmente.
- Exiba a "myAge" no console.
*/

const myAge = currentYear - myBirthYear;
console.log(myAge);


/*
09 - Antes do console.log abaixo, declare uma const "ten", que recebe o número
10 e:

- Descomente o console.log;
- Substitua a palavra "valor1" pelo ano atual somado à 10;
- Substitua a palavra "valor2" pela sua idade somada à 10;
- Os números não devem ser digitados manualmente;
- Observe o resultado no console do browser.

*/
const ten = 10;
console.log(`Em ${currentYear + ten}, estarei com ${myAge + ten} anos.`)

/*
10 - Abra o site abaixo no browser e faça o seguinte:

http://whathappenedinmybirthyear.com/

- No console do devtools, declare uma const "myBirthYear" que recebe o ano em que
você nasceu (4 dígitos) e pressione enter;
*/

// document.querySelector('#birthYear').value = myBirthYear;
// document.querySelector('.formButton').click()