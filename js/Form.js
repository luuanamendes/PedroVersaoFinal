  //cria os elementos do formulario para iniciar o jogo
class Form {
  constructor() {
    //imagem que aparece com o nome do jogo
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    //input = caixa de entrada do nome
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    //botão
    this.playButton = createButton("Jogar");
    //texto
    this.greeting = createElement("h2");
  }

  //define a posição dos elementos do formilario
  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  //define o estilo dos elementos do formulario - style.css
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //hide indentifica o clique - após o clique ele esconde os elementos
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //função para quando clicar no botão
  handleMousePressed() {
    //se o mouse clicar no botão de play
    this.playButton.mousePressed(() => {

      //esconde o input e o botão
      this.input.hide();
      this.playButton.hide();

      //exibe uma mensagem para o player
      var message = `
      Olá ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);

      //adiciona um player no BD(banco de dados)
      playerCount += 1;
      //adiciona o nome no player no BD - atraves do valor inserido no input
      player.name = this.input.value();
      //adiciona um numero para indentificar o player 1 ou 2
      player.index = playerCount;
      //chama a função para adicionar o player e atualizar os dados do BD
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  //mostra na tela
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
