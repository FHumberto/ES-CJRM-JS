const article = document.querySelector('article');


//! converte um html colection em array. (não modifica o original, retorna novo)
console.log(Array.from(article.children));

//* adiciona a classe CSS a todos os filhos de article.
Array.from(article.children).forEach(element =>
{
    element.classList.add('article-element');
})

console.log(title.parentElement.parentElement);