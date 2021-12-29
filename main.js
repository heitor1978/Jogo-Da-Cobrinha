let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box

}
let direcao = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}   

function criarCobrinha(){
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y, box,box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown',atualizar);

function atualizar(event){
    if(event.keyCode == 37 && direcao != 'right') direcao = 'left';
    if(event.keyCode == 38 && direcao != 'down') direcao = 'up';
    if(event.keyCode == 39 && direcao != 'left') direcao = 'right';
    if(event.keyCode == 40 && direcao != 'up') direcao = 'down';
}    

function iniciarJogo(){
    if(cobra[0].x > 15 * box && direcao == 'right') cobra[0].x = 0;
    if(cobra[0].x < 0 * box && direcao == 'left') cobra[0].x = 16 * box;
    if(cobra[0].y > 15 * box && direcao == 'down') cobra[0].y = 0;
    if(cobra[0].y < 0 * box && direcao == 'up') cobra[0].y = 16 * box;
    
    for(i = 1; i < cobra.length; i++){
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }


    criarBG();
    criarCobrinha();
    drawFood();


    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao == "right") cobraX += box;
    if(direcao == "left") cobraX -=box;
    if(direcao == "up") cobraY -= box;
    if(direcao == "down") cobraY += box;

    if(cobraX != food.x || cobraY != food.y){
        cobra.pop();
    } 
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    cobra.pop();

    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo,100);



