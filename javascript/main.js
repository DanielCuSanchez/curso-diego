console.log("Hola desde consola")

var numero = 1
var letra = 'c'
var decimal = 2.5
var boleana = true
let numero3 = 867468
let letra1 = 'e'
let decimal1 = 2.3



let etiqueta = document.getElementById('hola')

etiqueta.style.backgroundColor = 'red'

etiqueta.style.color = 'white'

etiqueta.innerHTML = 'Esto es desde JS'

//console.log(etiqueta)


let misPuntos = document.getElementsByClassName('punto')

console.log("MIS ELEMENTOS: ", misPuntos)
var contador = 0
for (etiqueta of misPuntos) {
    etiqueta.innerHTML = `Hola soy una etiqueta xD ${contador}`
    contador++
}