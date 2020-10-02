
var database;
var gameState=0;
var playerCount=0;
var form,player,game;
var distance=0;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
    createCanvas(displayWidth-60,displayHeight-90);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount===4){
game.update(1);
}
if(gameState===1){
    clear();
    game.play();
}
}

