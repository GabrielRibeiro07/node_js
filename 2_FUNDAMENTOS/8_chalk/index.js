import chalk from 'chalk';

const nota = 4

if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns`!! você foi aprovado!'))
} else {
    console.log(chalk.bgRed('Infelizmente você não atingiu a NOTA! reprovado'))
}
