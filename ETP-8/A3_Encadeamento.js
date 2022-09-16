console.log('\n»»»»»» ENCADEAMENTO ««««««\n');
const books = [
  { name: "Código Limpo", price: 30 },
  { name: "O Milagre da Manhã", price: 5 },
  { name: "Alice no País das Maravilhas", price: 10 },
  { name: "Quem Pensa Enriquece", price: 50 },
  { name: "O Livro da Ciência", price: 40 }
]

// const filteredBooks = books.filter(book => book.price > 20);
// const booksOnSale = filteredBooks.map(book => `O preço do livro "${book.name}" caiu para ${book.price}`);


const booksOnSale = books
  .filter(book => book.price > 20)
  .map(book => `O preço do livro "${book.name}" caiu para ${book.price}`);

console.log(booksOnSale);