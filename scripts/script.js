function tirarDado() {
const numero = Math.floor(Math.random() * 6) + 1;

const imagenDado = document.getElementById("dice");
imagenDado.src = `images/dice${numero}.png`;
imagenDado.style.transform = "rotate(" + (numero * 60) + "deg)";
}