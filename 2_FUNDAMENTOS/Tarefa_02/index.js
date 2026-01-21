import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt ([{
    name: 'p1',
    message:'Qual o seu nome? ' 
}, {
    name: 'p2',
    message: 'Qual sua idade?'
}
])
.then((answers) => {
    const idade = parseInt(answers.p2)
    const nome = String(answers.p1)
    console.log(`Seu nome é ${chalk.bgYellow(nome)} e sua idade é ${chalk.bgYellow(idade)}`)
})