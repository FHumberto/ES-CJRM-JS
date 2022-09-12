//! sempre colocar o listener no form e não no botão.
const form = document.querySelector('.signup-form');
const usernameImput = document.querySelector('#username');
const testUsername = username => pattern.test(username);

form.addEventListener('submit', event =>
{
    event.preventDefault(); //* impede que a página seja recarregada ao clicar (enviar)

    // console.log(usernameImput.value);
    console.log(form.username.value); //* outra forma de conseguir a ref pelo id.
})

const pattern = /^[a-zA-z]{6,12}$/;
const isAMatch = pattern.test(username);

if (isAMatch)
{
    console.log('O teste da regex passou =]');
}
else
{
    console.log('O teste da regex não passou ]=');
}

form.username.addEventListener('keyup', event =>
{
})