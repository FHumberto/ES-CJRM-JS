//? Colocar function sempre acima no código.

// Function declaration - forma 1
function sayHi()
{
    console.log('oi');
}

// Function expression - forma 2
const showFood = function ()
{
    console.log('pizza');
}

sayHi();
showFood();

// Argumentos, parâmetros e default parameters
const myFunc = function (name = 'nome', lastName = 'Sobrenome') //* (Parâmetro)
{
    console.log(`Oi, ${name} ${lastName}!`);
}

myFunc('Humberto', 'Guedes'); //* (Argumento)
myFunc('Humberto');
myFunc();

// Retornando valores
const double = function (number)
{
    return number * 2;
}

console.log(double(3));