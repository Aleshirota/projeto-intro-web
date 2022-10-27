

const objeto1 = {
    modelo: "astra",
    ano: 2003,
    transmissaoMecanica: "true",
    listaCompra: ["cinza", "teto solar", "banco de couro"],
    imagem: fff
}


const objeto2 = {
    modelo: "vectra",
    ano: 2010,
    transmissaoMecanica: "true",
    listaCompra: ["vermelho", "vidro eletrico", "Chave reserva"],
    imagem: ff  
}



const objeto3 = {
    modelo: "civic",
    ano: 2015,
    transmissaoMecanica: "false",
    listaCompra: ["preto", "gasolina", "camera de ré"],
    imagem: ff
}

const objeto4 = {
    modelo: "DS3",
    ano: 2020,
    transmissaoMecanica: "false",
    listaCompra: ["amarelo", "alcool", "teto solar"],
    imagem: ff
}


const guardarObjetos = []


guardarObjetos.push(objeto1, objeto2, objeto3)

//console.log("Guardando objetos na Array:", guardarObjetos)

console.log("=============================================================")

for (let i = 0; i < guardarObjetos.length; i++) {

    console.log("Modelo", guardarObjetos[i].modelo)
    console.log("Ano", guardarObjetos[i].ano);
    console.log("Transmissão", guardarObjetos[i].transmissaoMecanica);
    console.log("Opcionais", guardarObjetos[i].listaCompra);



}

console.log("=========================================================")


const stringModelo = guardarObjetos[1].modelo
//console.log("teste2",stringModelo)

const stringAno = guardarObjetos[1].ano
//console.log(stringAno)

const stringTransmissao = guardarObjetos[1].transmissaoMecanica
//console.log(stringTransmissao)
const stringCompras = guardarObjetos[1].listaCompra

console.log(`Modelos: ${stringModelo}
Ano: ${stringAno}
Transmissão: ${stringTransmissao}
Opcionais: "${stringCompras}"`)

console.log("=========================================================")

//for (let i = 0; i < guardarObjetos.length; i++) {
//    console.log(guardarObjetos[i].modelo)

//}

console.log("=========================================================")

//2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço.
// Ou seja, você não deve mais imprimir individualmente cada item do relatório. 
//Cada item deve ser exibido a partir de uma iteração do laço. Para testar, 
//adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.



//for (let i in guardarObjetos) {

//console.log(`
// Modelo: ${guardarObjetos[i].modelo.toUpperCase()} 
// Ano: ${guardarObjetos[i].ano} 
//Transmissão: ${guardarObjetos[i].transmissaoMecanica} 
// Opcionais: ${guardarObjetos[i].listaCompra}
// `)

//}
console.log("==================FOR=======================================")

guardarObjetos.push(objeto4)

for (car of guardarObjetos) {
    for (propriedade in car) {
        console.log(`${propriedade}: ${car[propriedade]}`)
    }

}

console.log("=======================for==================================")

//3. Crie uma função que receba como parâmetro um objeto,
// e devolva a string do relatório com os dados do objeto.

console.log("=======================Questão 3==================================")

const recebaObjeto = (objeto) => {

    console.log(`
    ${objeto.modelo.toUpperCase()}
    Ano: ${objeto.ano}
    Transmissão: ${objeto.transmissaoMecanica}
    Opcionais: ${objeto.listaCompra}
    `)
}

recebaObjeto(guardarObjetos[2])

console.log("=======================Questão 4==================================")

//4. Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto, e o objeto retornado deve 
//possuir apenas os itens que tenham o nome/título igual à string 
//passada como parâmetro. Caso não exista um item, exiba um ALERT 
//indicando que nenhum item foi encontrado.

const arrayDeObjetos = guardarObjetos.filter((objeto, indice, array) => {

    return objeto.modelo === "astra" 

 });


console.log(arrayDeObjetos)




console.log("=======================Questão 4==================================")

