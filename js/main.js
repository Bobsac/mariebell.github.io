//間違い探し
var goToStageA = document.getElementById('goToStageA');
if(goToStageA) {
  goToStageA.addEventListener('click', function () {
    console.log('stageA selected');
    location.href = 'http://' + location.host + '/mariebell.github.io/diff.html';
  });
}
//風船割り
var goToStageB = document.getElementById('goToStageB');
if(goToStageB) {
  goToStageB.addEventListener('click', function () {
    console.log('stageB selected');
    location.href = 'http://' + location.host + '/mariebell.github.io/catch.html';
  });
}
//脱出ゲーム
var goToStageC = document.getElementById('goToStageC');
if(goToStageC) {
  goToStageC.addEventListener('click', function () {
    console.log('stageC selected');
    location.href = 'http://' + location.host + '/mariebell.github.io/room.html';
  });
}
//迷路
var goToStageD = document.getElementById('goToStageD');
if(goToStageD) {
  goToStageD.addEventListener('click', function () {
    console.log('stageD selected');
    location.href = 'http://' + location.host + '/mariebell.github.io/blackmaze.html';
  });
}

$(function() {
  const stage = $('a-scene').data('game');
  switch (stage) {
    case 'gameA':
      gameA();
      break;
    case 'gameB':
      gameB();
      break;
    case 'gameC':
      gameC();
      break;
    case 'gameD':
      gameD();
      break;
    default :
      break;
  }
});

//ステージA まちがいさがし
function gameA() {

}

//ステージB 風船割り
function gameB() {
  var score = 0;
  var gameStatus = true;

  //風船が割れたらスコアを増やす
  var jcrushBalloon = $('.countup');
  jcrushBalloon.each(function() {
    $(this).on('click', function() {
      if (!gameStatus) {
        return false;
      }
      $('#scoreBoard').text('Score: ' + ++score);
      $(this).remove();
    });
  });

  //制限時間
  var sec = 30;
  var startDate = new Date();
  console.log("start: ", startDate);

  var endDate = new Date(startDate.getTime() + sec * 1000)
  console.log("end: ", endDate);

  var cnt = sec;
  var id = setInterval(function() {
    cnt--;
    console.log(cnt, gameStatus);

    $('#timeKeeper').text('Time: ' + cnt);
    //現在日時と終了日時を比較
    var date = new Date();
    if (date.getTime() >= endDate.getTime()) {
      gameStatus = false;
      $('#finish').html('GAME OVER<br>SCORE: ' + score).show();
      clearInterval(id);
      console.log('Finish!');
    }
  }, 1000);
}

//ステージC 脱出ゲーム
function gameC() {

}

//ステージD 迷路
function gameD() {
  var t = 0;
  var speed = 0.01;
  var isIntersect = false;

  AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
      this.el.addEventListener('raycaster-intersection', function () {
        isIntersect = true;
      });
      this.el.addEventListener('raycaster-intersection-cleared', function () {
        isIntersect = false;
      });
    }
  });

  function movePlayer() {
    var camera = document.getElementById('camera');

    if (camera && !isIntersect) {
      var position = camera.getAttribute('position');
      var rotation = camera.getAttribute('rotation');

      position.x += -Math.cos((rotation.y - 90) * Math.PI / 180) * speed;
      position.z += Math.sin((rotation.y - 90) * Math.PI / 180) * speed;
      camera.setAttribute('position', position);
    }
  }

  function render() {
    console.log(t);
    t += 0.01;
    requestAnimationFrame(render);
    //movePlayer();
  }
  render();
}