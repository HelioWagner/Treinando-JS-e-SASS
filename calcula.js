window.addEventListener("load", () => {
    let calcula_soma       = document.querySelector('.calcula_soma');
    let calcula_multiplica = document.querySelector('.calcula_multiplica');
    let calcula_dividir    = document.querySelector('.calcula_dividir');

    calcula_soma.addEventListener('click',executarCalculo)
    calcula_multiplica.addEventListener('click',executarCalculo)
    calcula_dividir.addEventListener('click',executarCalculo)
    
  });



function executarCalculo(e) {
    
    botao_clicado = e.target.className;
    
    switch (botao_clicado) {
        case 'calcula_soma':
            input_digitados = ".valor__Digitado__Soma"
            tag_resultado = "#resultado_final_soma"
            break;
        case 'calcula_multiplica':
            input_digitados = ".valor__Digitado__multiplica"
            tag_resultado = "#resultado_final_multiplicar"
            break;
        case 'calcula_dividir':
            input_digitados = ".valor__Digitado__dividir"
            tag_resultado = "#resultado_final_dividir"
            break;
        default:
            console.log("clicado fora das opções");
        }  
    
     totalCalculado  =   buscaCalculo(input_digitados)
      informarResultado(totalCalculado,tag_resultado)
}


function buscaCalculo(campos_digitados,tag_resultado ) {    

    let totalValores = 0
    elemento = document.querySelectorAll(campos_digitados)
    valor1   = elemento[0].value
    valor2   = elemento[1].value

    if (isNaN(valor1)||isNaN(valor2) ) {
        alert("Deve ser informado valor numérico. Por favor verifique!!")
        return null
     }

     if (campos_digitados == '.valor__Digitado__dividir') {
        if (Number(valor2) == 0) {
           alert("Deve ser informado valor maior que Zero para o campo 2. Por favor verifique!!")
           elemento[1].value = null;
           elemento[1].focus();
           return null
        }   
     }
     switch (campos_digitados) {
        case '.valor__Digitado__Soma':
            totalValores = (Number(valor1) + Number(valor2))
            break;
        case '.valor__Digitado__multiplica':
            totalValores  = (Number(valor1) * Number(valor2))
            break;
        case '.valor__Digitado__dividir':
            

            totalValores  = (Number(valor1) / Number(valor2))
            break;
        default:
            console.log("clicado fora das opções");
        }  


     console.log(totalValores)
     return totalValores
}

function informarResultado(valor, tag_resultado) {    
    resultadoSoma = document.querySelector(tag_resultado)
    resultadoSoma.innerHTML  = valor    
}
