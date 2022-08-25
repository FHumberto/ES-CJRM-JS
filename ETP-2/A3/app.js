// break e continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++)
{
    if (scores[i] === 0)
    {
        continue; // o código abaixo é ignorado e o loop continua. Pula uma iteracão em particular.
    }

    console.log(`sua pontuação: ${scores[i]}`);

    if (scores[i] === 100)
    {
        console.log('parabéns, você atingiu a pontuação máxima.');
        break; // para a execução do loop.
    }
}

console.log('');

// switch statement
const grade = 'F';

switch (grade)
{
    case 'A':
        console.log('você tirou um A.');
        break;
    case 'B':
        console.log('você tirou um B.');
        break;
    case 'C':
        console.log('você tirou um C.');
        break;
    case 'D':
        console.log('você tirou um D.');
        break;
    case 'E':
        console.log('você tirou um E.');
        break;
    default:
        console.log('nota inválida.');
}