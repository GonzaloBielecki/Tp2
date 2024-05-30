function constructor(elemento){
    return document.getElementById(elemento)
}
const ladoA = constructor("ladoA")
const ladoB = constructor("ladoB")
const ladoC = constructor("ladoC")
const mensaje = constructor("mensaje")

function calcular(){
    if (ladoA.value>0 && ladoB.value>0 && ladoC.value>0 && ladoA.value>ladoC.value){
        const areaTriangulo= (ladoB.value*(ladoA.value-ladoC.value))/2
        const areaCuadrado=(ladoB.value*ladoB.value)
        const areaTotal= areaCuadrado+areaTriangulo
        mensaje.textContent=`${areaTotal}mts`
    }else{
            alert("Ingresados incorrectos")
    }

}
