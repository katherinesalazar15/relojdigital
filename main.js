function formatearA2Caracteres(valor){
    return String(valor).padStart(2 , "0");
}

function mostrarHora(){
    const hoy = new Date();
    const horas = formatearA2Caracteres(hoy.getHours());
    const minutos = formatearA2Caracteres(hoy.getMinutes());
    const segundos = formatearA2Caracteres(hoy.getSeconds());
    const hora = `${horas}:${minutos}:${segundos}`; 
    document.getElementById("reloj").innerHTML = hora;
}

window.setInterval(mostrarHora, 1000);