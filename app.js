class UI {
    constructor() {
        this.tarjetas = document.getElementById('tarjetas');
        this.botonComenzarDiv = document.getElementById('boton-comenzar-div');
        this.botonComenzar = document.getElementById('boton-comenzar');
        this.borrarHijoDiv = document.getElementById('borrar-hijo-div');
        this.borrarDiv = document.getElementById('borrar-div');
        this.puntos = document.getElementById('puntos');
    }

    primeraPregunta() {
        this.borrarHijoDiv.removeChild(this.borrarDiv);
        this.botonComenzarDiv.removeChild(this.botonComenzar);
        let pregunta1 = document.createElement('div');
        pregunta1.innerHTML = `
            <div id='tarjeta-primera-pregunta'>
                <p id='primera-pregunta'>¿Cuál es el río más largo del planeta?
                    <br>
                    <br>
                    <button id='incorrecta'>Nilo</button>
                    <button id='correcta'>Amazonas</button>
                    <br>
                    <button id='incorrecta'>Misisipi</button>
                    <button id='incorrecta'>Yangtsé</button>
                </p>
                <br>
                <button id='siguiente'>Siguiente pregunta</button>
            </div>
        `
        this.tarjetas.appendChild(pregunta1);
    }

    segundaPregunta(element) {
        let parent = element.parentElement;
        this.tarjetas.removeChild(parent);
        let pregunta2 = document.createElement('div');
        pregunta2.innerHTML = `
        <div id='tarjeta-segunda-pregunta'>
            <p id='segunda-pregunta'>¿Durante qué siglos se desarrolló la Edad Media?
                <br>
                <button id='incorrecta'>w</button>
                <button id='correcta'>x</button>
                <br>
                <button id='incorrecta'>y</button>
                <button id='incorrecta'>z</button>
            </p>
            <br>
            <button id='siguiente'>Siguiente pregunta</button>
        </div>
        `
        this.tarjetas.appendChild(pregunta2);
    }
}


function eventListeners() {
const botonComenzar = document.getElementById('boton-comenzar');
const siguientePregunta = document.getElementById('siguiente');
const ui = new UI();

botonComenzar.addEventListener('click', function(event) {
    event.preventDefault();
    ui.primeraPregunta();
});

siguientePregunta.addEventListener('click', function(event) {
    event.preventDefault();
    ui.segundaPregunta(event.target.parentElement);
});

}

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});