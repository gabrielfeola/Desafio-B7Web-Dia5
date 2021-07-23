// Dados iniciais
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');



// Eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
})
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);



// Funções

//Função responsável por fazer a troca das cores na paleta.
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

//Função responsável pelas ações ao clicar no mouse.
function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

//Função responsável pelas ações ao movimentar o mouse.
function mouseMoveEvent(e) {
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}

//Função responsável pelas ações ao soltar o clique do mouse.
function mouseUpEvent() {
    canDraw = false;
}

//Função responsável por fazer o desenho em si.
function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(pointX, pointY);
        ctx.closePath();
        ctx.strokeStyle = currentColor;
        ctx.stroke();
    mouseX = pointX;
    mouseY = pointY;
}

//Função responsável por limpar a tela.
function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}