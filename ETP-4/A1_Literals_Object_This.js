console.log('LITERALS, OBJECT, THIS:');
//*  objeto literal
let user = {
    name: 'João',
    age: 31,
    email: 'joaoexemplo@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function ()
    {
        console.log('Usuário logado');
    },
    logout: function ()
    {
        console.log('Usuário deslogado');
    },
    logBlogPosts: function ()
    {
        //! se usar uma arrow function resultara em erro, o this irá referenciar o Window.
        // console.log(this); //? this referência o próprio objeto.
        // console.log(this.blogPosts); //? this é um objeto de contexto, que muda dependendo do escopo e objeto.
        console.log(`${this.name} escreveu os seguintes posts: `);
        this.blogPosts.forEach(post =>
        {
            console.log(post);
        });
    }
};
user.logBlogPosts();
console.log('');
console.log(this);

//* modificar o valor de uma propriedade
user.age = 32;
console.log(`Age: ${user.age}`);

//* forma alternativa para modificar (notaçao de colchetes)
user['name'] = 'José';
console.log(`Name: ${user.name}`);
