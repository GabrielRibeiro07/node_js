const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
 
})

 readline.question("Qual sua linguagem preferida?", (language) =>{
    if (language === "Power apps") {
        console.log('Está de bricandeira isso nem é linguagem')}

    else{
    console.log(`A minha linguagem de programação preferida é: ${language}`)
    readline.close()
    }
 })

