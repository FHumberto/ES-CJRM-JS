console.log('\nARROW FUNCTIONS');

// Função tradicional
const doubleT = function (number)
{
    return number * 2;
}

//? Arrow Functions são sempre funções anônimas
const doubleA = (number) =>
{
    return number * 2;
}

// não precisa do Function
const doubleB = () =>
{
    return number * 2;
}

const doubleC = number => number * 2;
const result = doubleA(2);

console.log(result);