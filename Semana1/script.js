

const modelo1 = "Astra"
const ano1 = 2003
let transmissaoMecanio1 = "true"
const listaCompra1 = ["cinza", "teto solar","banco de couro" ]
const modeloMaiusculo1 = modelo1.toUpperCase()
console.log (`Modelo: ${modeloMaiusculo1} 
Ano: ${ano1} 
Transmissão: ${transmissaoMecanio1}
Opcionais: ${listaCompra1}`)

const modelo2 = "vectra"
const ano2 = 2010
let transmissaoMecanio2 = "true"
const listaCompra2 = ["vermelho", "vidro eletrico", "Chave reserva"]
const modeloMaiusculo2 = modelo2.toUpperCase()
console.log (`Modelo: ${modeloMaiusculo2} 
Ano: ${ano2} 
Transmissão: ${transmissaoMecanio2}
Opcionais: ${listaCompra2}`)

const modelo3 = "civic"
const ano3 = 2015
let transmissaoMecanio3 = "false"
const listaCompra3 = ["preto", "gasolina","camera de ré"]
const modeloMaiusculo3 = modelo3.toUpperCase()
console.log (`Modelo:${modeloMaiusculo3} 
Ano: ${ano3} 
Transmissão: 
${transmissaoMecanio3}
Opcionais: ${listaCompra3}`)

console.log ("==============Média e Valor Booleano=================================")

const verificaTransmissao = transmissaoMecanio1 && transmissaoMecanio2 && transmissaoMecanio3;
const media = ((ano1 + ano2 + ano3) /3)
console.log (`${media} ${verificaTransmissao}`)

