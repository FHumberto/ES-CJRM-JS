console.log('\nVARIÁVEIS E ESCOPO DE BLOCO:');
// variáveis e escopo de bloco
let age = '31';
//! var é escopo global.

if (true)
{
    let age = 41; //* Pode criar uma váriável de mesmo nome em outro escopo.
    console.log(`dentro do primeiro bloco: ${age}`); //? Referência local.
    if (true) { console.log(age); } // referencia o escopo mais próximo.
}

console.log(`fora do bloco: ${age}\n`);