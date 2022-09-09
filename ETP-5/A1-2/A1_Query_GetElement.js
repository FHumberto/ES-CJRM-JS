console.log('QUERY AND GET ELEMENT:');
//* Qery selector pega a primeira ocorrencia informada no argumento.
const h1 = document.querySelector('body > h1');
console.log(h1);

//* Query selector all, pega todas as ocorrências e agrega em uma lista.
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

//* obter elemento através do ID
const title = document.getElementById("title");

//* obter elemento através da classe
const erros = document.getElementsByClassName('error');
console.log('CLASS REF:');
console.log(erros); //? HTML Collection não pode ter foreach.

//* obter referência através do nome da tag
const allParagraphs = document.getElementsByTagName('p');