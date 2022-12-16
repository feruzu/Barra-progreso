const cargando = document.querySelector('.numero-carga');
const car = document.querySelector('.carg');

let porcentaje = 0;

let total = setInterval( () => {
    porcentaje+=1

    if(porcentaje === 100){
        clearInterval(total)
        car.textContent=`¡Listo!`
    }

    cargando.textContent=`${porcentaje}%`
}, 100);