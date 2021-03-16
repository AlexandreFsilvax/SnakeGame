let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//  O contexto define como deverá ser renderizado o que tem no canvas
let box = 32; // define o tamanho em pixel de cada quadrado

function criarBg() { // cria o plano de fundo
context.fillStyle = "lightgreen"; //Fill Style é o estilo do contexto, no caso verde
context.fillRect(0, 0, 16 * box, 16 * box); // fill rect definiu o conjunto de quadrados do canvas no caso 16x 32pixels

}

criarBg();
