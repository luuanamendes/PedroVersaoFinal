//declara as variaveis
var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

//carrega as imagens/animaçoes/sons
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/PISTA.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}

//inicializa as variaveis - executa uma vez
function setup() {
  //cria a tela do jogo conforme o tamanho da sua tela
  canvas = createCanvas(windowWidth, windowHeight);

  //inicializa o banco de dados - colocamos no index.html
  database = firebase.database();

  //inicializa o jogo com a classe Game - Game.js
  game = new Game();

  //chama a função getState para o game - Game.js
  game.getState();

  //chama a função start para o game - Game.js
  game.start();
}

//desenha na tela - executa varias vezes
function draw() {
  //atribui uma imagem para o fundo
  background(backgroundImage);

  //condicional para iniciar o jogo
  //se o numero de jogadores for 2, então muda o estado do jogo para 1 - Game.js
  if (playerCount === 2) {
    game.update(1);
  }

  //se o estado do jogo for 1, chama a função play - Game.js
  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

//função para atualizar o tamanho da tela 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
