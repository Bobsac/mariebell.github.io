//
// var clickElement = document.getElementById("sample-obj");
// clickElement.addEventListener("click", function() {
//   location.href = "https://thom-i.github.io/aframe/030/sample-030/";
// },false);

var goToStageA = document.getElementById('goToStageA');
if(goToStageA) {
  goToStageA.addEventListener('click', function () {
    location.href = 'http://' + location.host + '/mariebell.github.io/catch.html';
  });
}


$(function() {
  //index ステージ選択画面



  //ステージA まちがいさがし


  //ステージB 風船こわし
  var score = 0;
  var gameStatus = true;

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




  //ステージC 迷路からの脱出


  //ステージD 部屋からの脱出
});