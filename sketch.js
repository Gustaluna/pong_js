//variávies da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

//variáveis da raquete
let xraquete = 5
let yraquete = 150
let raquetecomprimento = 10
let raquetealtura = 90

let colidiu = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0)
  mostrabolinha()
  movimentabolinha()
  verificacolisaoborda()
  mostraraquete()
  movimentaminharaquete()
  //verificacolisaoraquete()
  colisaominharaquetebiblioteca()
}


function mostrabolinha() {
  circle (xbolinha, ybolinha, diametro)
}

function movimentabolinha() {
  xbolinha +=velocidadexbolinha
  ybolinha +=velocidadeybolinha
}

function verificacolisaoborda() {
    if (xbolinha +raio > width || xbolinha -raio < 0) {
    velocidadexbolinha *= -1;
  }
  
  if (ybolinha +raio > height || ybolinha -raio < 0) {
    velocidadeybolinha *= -1
  }
}

function mostraraquete() {
   rect(xraquete, yraquete, raquetecomprimento, raquetealtura)
}

function movimentaminharaquete(){
  if (keyIsDown(UP_ARROW)) {
    yraquete -= 10;    
  }
    if (keyIsDown(DOWN_ARROW)) {
    yraquete += 10;    
  }
}

function verificacolisaoraquete(){
  if (xbolinha -raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && ybolinha + raio > yraquete) {
    velocidadexbolinha *= -1
  }
}

function colisaominharaquetebiblioteca(){
  colidiu = collideRectCircle(xraquete,yraquete,raquetecomprimento,raquetealtura,xbolinha,ybolinha,raio);
  
  if(colidiu){
    velocidadexbolinha *= -1
  }
}