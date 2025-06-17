
const campo1 = document.querySelector("#campo1")
const campo2 = document.querySelector("#campo2")
const botaosoma = document.querySelector("#botaosoma")
const botaosubtracao = document.querySelector("#botaosubtracao")
const botaomultiplicacao = document.querySelector("#botaomultiplicacao")
const botaodivisao = document.querySelector("#botaodivisao")
const camporesultado = document.querySelector("#resultado")


botaosoma.addEventListener("click",function(){
    const valor1 = parseInt(campo1.value)
    const valor2 = parseInt(campo2.value)
    camporesultado.textContent =valor1+valor2
    
})
botaosubtracao.addEventListener("click",function(){
    const valor1 = parseInt(campo1.value)
    const valor2 = parseInt(campo2.value)
    camporesultado.textContent =valor1-valor2
    
})
botaomultiplicacao.addEventListener("click",function(){
    const valor1 = parseInt(campo1.value)
    const valor2 = parseInt(campo2.value)
    camporesultado.textContent =valor1*valor2
    
})
botaodivisao.addEventListener("click",function(){
    const valor1 = parseInt(campo1.value)
    const valor2 = parseInt(campo2.value)
    camporesultado.textContent =valor1/valor2
    
})