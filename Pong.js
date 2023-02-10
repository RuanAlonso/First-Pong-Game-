//variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//variaveis velocidade
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;

let colidiu = false;

let xRaqueteOP = 585;
let yRaqueteOP = 150;
let velocidadeyOP;

//placar do jogo
let meusPontos = 0;
let pontosOP = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
    
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  bateRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOP, yRaqueteOP);
  movimentaRaqueteOP();
  bateRaquete(xRaqueteOP, yRaqueteOP);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  calculaChanceDeErrar();
  }

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
    }
    if (xBolinha + raio > 600){
      xBolinha = 580
    }
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaBolinha(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
    
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    
    velocidadeyBolinha *= -1;
  }
 }

function mostraRaquete(x,y){
    rect (x, y, widthRaquete, heightRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
  
function movimentaRaqueteOP(){
    
    velocidadeyOP = yBolinha - yRaqueteOP - heightRaquete /2 - 30;
    yRaqueteOP += velocidadeyOP;
    
  }

function bateRaquete(x,y){
  colidiu = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
     velocidadexBolinha *=-1;
    raquetada.play();

  }
}

function calculaChanceDeErrar(){
  if (pontosOP > meusPontos + 1) {
    chanceDeErrar = random (-54, -50)}
  else {chanceDeErrar = 0}
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0))
  rect(450,10,40,20);
  fill(255);
  text(pontosOP, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOP += 1;
    ponto.play();
  }
}
