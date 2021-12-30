const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const cuentaRegresiva = document.getElementById('cuenta-regresiva');
const año = document.getElementById('año');
const cargando = document.getElementById('cargando');

const añoActual = new Date().getFullYear();

const añoNuevo = new Date(`January 01 ${añoActual + 1} 00:00:00`);

año.innerText = añoActual + 1;

function actualizarCuentaRegresiva() {
    const tiempoActual = new Date();
    const diferencia = añoNuevo - tiempoActual;
    
    const d = Math.floor(diferencia / 1000 / 60 / 60 / 24);
    const h = Math.floor(diferencia / 1000 / 60 / 60) % 24;
    const m = Math.floor(diferencia / 1000 / 60) % 60;
    const s = Math.floor(diferencia / 1000) % 60;

    dias.innerHTML = d;
    horas.innerHTML = h < 10 ? '0' + h : h;
    minutos.innerHTML = m < 10 ? '0' + m : m;
    segundos.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
    cargando.remove();
    cuentaRegresiva.style.display = 'flex';
}, 1000);


setInterval(actualizarCuentaRegresiva, 1000);