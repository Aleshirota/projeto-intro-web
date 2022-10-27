//1. Transforme os itens que criamos nas últimas semanas em objetos.

const modelo1 = "Astra"
const ano1 = 2003
let transmissaoMecanio1 = "true"
const listaCompra = ["cinza", "teto solar","banco de couro" ]

const objeto1 = {
    modelo: "Astra", 
    ano: 2003, 
    transmissaoMecanica: "true",
    listaCompra: ["cinza", "teto solar","banco de couro" ]

    }

    const modelo2 = "vectra"
    const ano2 = 2010
    let transmissaoMecanio2 = "true"
    const listaCompra2 = ["vermelho", "vidro eletrico", "Chave reserva"]

const objeto2 = {
    modelo: "vectra", 
    ano: 2010, 
    transmissaoMecanica: "true",
    listaCompra: ["vermelho", "vidro eletrico", "Chave reserva"]
    
    }

    const modelo3 = "civic"
    const ano3 = 2015
    let transmissaoMecanio3 = "false"
    const listaCompra3 = ["preto", "gasolina","camera de ré"]


const objeto3 = {
    modelo: "civic", 
    ano: 2015, 
    transmissaoMecanica: "false" ,
    listaCompra: ["preto", "gasolina","camera de ré"]
    }


//2. Crie um array para guardar os objetos. 
//Este array deve estar vazio, por enquanto;
guardarObjetos = []
//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, 
//utilizando o push()
guardarObjetos.push(objeto1,objeto2,objeto3)

console.log("Guardando objetos na Array:",guardarObjetos)
//4. Altere o item “Adicione os novos objetos no array de objetos, 
//utilizando o push()” (item 3), para criar uma verificação antes de dar o push. 
//A caraterística booleana do objeto deve ser validada. Isto é, 
//o objeto só deve ser adicionado ao array se a propriedade booleana for true;


const modeloCarro = prompt ("Digita o modelo do carro:")
const verificaModeloCarro = objeto1.modelo
console.log ("Verfica modelo do carro",verificaModeloCarro)

console.log (modeloCarro)

if(verificaModeloCarro===modeloCarro){

            alert("Já existe o modelo")
            
}else if(guardarObjetos.push(modeloCarro)){

            alert("Modelo adicionado com sucesso")
}
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um 
//**ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

