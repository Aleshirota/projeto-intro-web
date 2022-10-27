function insereItem(event){
    //    criar um elemento novo
        let elementoNovo = document.createElement("li")
        console.log(elementoNovo)
    
    
    // criar uma variavel que guarda os itens novos
    let input = document.getElementById("meu-input")
    console.log(input.value)
    
    // colocar item novo no elemento novo
    // elementoNovo.appendChild(input.value) com erro
    elementoNovo.innerHTML = input.value
    
    let referencia = document.getElementById("lista")
    referencia.insertAdjacentElement("beforeend" ,elementoNovo)
    
    input.value = ""
    }