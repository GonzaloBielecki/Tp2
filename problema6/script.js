function $(elemento){
    return document.getElementById(elemento)
}
const formulario = $("formulario")





formulario.addEventListener("submit", (e)=>{
    if (formulario.nombre.value === ""){
        mensaje.textContent= "El nombre no puede estar vacio"
        mensaje.style.color="red"
    } else if (formulario.nombre.value.length>50){
        mensaje.textContent="El nombre debe tener menos de 50 caracteres"
        mensaje.style.color="red"
    }else if (formulario.apellido.value===""){
        mensaje.textContent="El apellido no puede estar vacio"
        mensaje.style.color="red"
    } else if (formulario.apellido.value.length>50){
        mensaje.textContent="El apellido debe ser menor de 50 caracteres"
        mensaje.style.color="red"
    }else if (formulario.edad.value ===""){
        mensaje.textContent="La edad esta vacia"
        mensaje.style.color="red"
    }else if (formulario.edad.value<18){
        mensaje.textContent="La edad debe ser mayor a 18 años"
        mensaje.style.color="red"
    }else if (formulario.altura.value===""){
        mensaje.textContent="La altura esta vacia"
        mensaje.style.color="red"
    }else if(formulario.altura.value>230){
        mensaje.textContent="La Altura deber ser menor a 230 cm"
        mensaje.style.color="red"
    }else if (formulario.email.value===""){
        mensaje.textContent="El email debe ser completado"
        mensaje.style.color="red"

    }else if (!formulario.email.value.includes("@")){
        mensaje.textContent="EL mail debe contener @"
        mensaje.style.color="red"
    }
    else{
        mensaje.textContent="Todos los campos estan completos"
        mensaje.style.color="green"
    }
    e.preventDefault()

})


