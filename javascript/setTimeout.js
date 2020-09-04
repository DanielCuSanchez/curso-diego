let etiqueta = document.getElementById('alerta')
etiqueta.innerHTML  = ' Hola '

setTimeout(function(){
    etiqueta.innerHTML = ''
},5000)