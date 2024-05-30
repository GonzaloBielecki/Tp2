function constructor(elemento){
    return document.getElementById(elemento)
}

const peso  = constructor("peso")
const altura =constructor("altura")
const mensaje=constructor("mensaje")

function calcular(){
    if (peso.value>0 && altura.value>0){
        const imc=(peso.value/altura.value**2)
        mensaje.textContent=`El IMC es: ${imc}`
        
    }
    
}
