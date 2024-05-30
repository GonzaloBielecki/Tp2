async function datos(){
    const res =  await fetch("https://jsonplaceholder.typicode.com/users")
    const personas = await res.json()
    const contenier=$("contenedor")
    personas.forEach(persona => {
        const contenedor1 = document.createElement("div")
        const itemNombre=document.createElement("p")
        const itemId=document.createElement("p")
        const itemUsuario=document.createElement("p")
        const itemEmail=document.createElement("p")
        const itemWebsite=document.createElement("p")
        contenedor1.id="contenedorPersonas"
        itemId.textContent=`Id: ${persona.id}`
        itemNombre.textContent=`Nombre: ${persona.name}`
        itemUsuario.textContent=`Usuario: ${persona.username}`
        itemEmail.textContent=`Email: ${persona.email}`
        itemWebsite.textContent=`Wedsite: ${persona.website}`
        function agregar (item){
            contenedor1.appendChild(item)
        }
        agregar(itemId)
        agregar(itemNombre)
        agregar(itemUsuario)
        agregar(itemEmail)
        agregar(itemWebsite)
        
        contenier.appendChild(contenedor1)
        const botonTareas=document.createElement("button")
        botonTareas.textContent="Ver Tareas"
        botonTareas.id="botonTareas"
        contenedor1.appendChild(botonTareas)
        contenier.appendChild(contenedor1)
        botonTareas.addEventListener("click", async()=>{
            const res =await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);
            const tareas=await res.json()
            tareas.forEach(tarea=>{
                const itemTarea=document.createElement("p")
                itemTarea.textContent=`Tarea:${tarea.id}-${tarea.title}`
                if(tarea.completed==true){
                    itemTarea.style.color="green"
                }else{
                    itemTarea.style.color="red"
                }
                botonTareas.disabled=true
                contenedor1.appendChild(itemTarea)
                

            })

        })
        

        
        
        
    });

}
datos()
function $(elemento){
    return document.getElementById(elemento)
}
