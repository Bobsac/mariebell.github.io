//ボール集めゲーム
var score = 0;
var clickElement = document.getElementById("sample-obj");
clickElement.addEventListener("click", function() {
  location.href = "https://thom-i.github.io/aframe/030/sample-030/";
},false);

var scoreBoard = document.querySelector('#scoreBoard');

var crushBalloon = document.getElementsByClassName('countup');
for(let i=0; i < crushBalloon.length; i++) {
  crushBalloon[i].addEventListener('click', () => {
    scoreBoard.innerHTML = ++score;
    crushBalloon[i].parentNode.removeChild(crushBalloon[i]);
  }, false);
}

function emitBalloon() {
  
}