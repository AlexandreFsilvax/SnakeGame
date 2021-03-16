let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//  O contexto define como deverá ser renderizado o que tem no canvas
let box = 32; // define o tamanho em pixel de cada quadrado
let snake= [];
snake[0] = {
    x: 8 *box,
    y: 8 *box
}
let direction = "right" ;
function criarBg() { // cria o plano de fundo
context.fillStyle = "lightgreen"; // Fill Style é o estilo do contexto, no caso verde
context.fillRect(0, 0, 16 * box, 16 * box); // fill rect definiu o conjunto de quadrados do canvas no caso 16x 32pixels

}

function criarCobrinha(){ 
    for( i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
} 

function iniciarJogo(){
criarBg();
criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction=="right") snakeX += box;
    if(direction=="left") snakeX -= box;
    if(direction=="up") snakeY -= box;
    if(direction=="down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo,100);