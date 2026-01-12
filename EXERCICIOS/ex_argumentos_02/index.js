console.log('Começo do programa!')

console.log(process.argv)

const args = process.argv.slice(2)

const [dado] = args

console.log(dado)

const partes = dado.split('=')
const [chave, valor] = partes

console.log('chave:', chave)
console.log('Valor:', valor)
