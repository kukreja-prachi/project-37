var canvas;
var gameState = 0;
var constestantCount , database , quiz , questions , constestant

function setup(){
  canvas = createCanvas(850,400);
  canvas = createCanvas(400,400);
  database = firebase.database();
  quiz = new Quiz
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
