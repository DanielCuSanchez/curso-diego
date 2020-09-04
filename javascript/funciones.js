
//Estrcutura


function saludar() {
    let etiquetaSaludo = document.getElementById('respuesta')
    let nombrePersona = document.getElementById('nombre').value
    etiquetaSaludo.innerHTML = 'Hola ' + nombrePersona
}


let nombre = 'Daniel'
let apellido = 'Cu'
let textCompleto = `Nombre: ${nombre} Apellido: ${apellido} Suma: ${1 + 3}`

console.log(textCompleto)