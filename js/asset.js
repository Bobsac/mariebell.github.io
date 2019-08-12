var ASSET = ASSET || {};

//ゲーム開始時の3秒間のカウントダウン
ASSET.countDownStart = function() {
  var start = new Date();
  var end = new Date(start.getTime() + 3000);

  cnt = 3;
  var cntPnl = document.querySelector('#countPanel');
  var id = setInterval(function() {
    cnt--;
    cntPnl.setAttribute('material',
        cnt > 0
        ? 'src: url(img/count' + cnt +'.png)'
        : 'src: url(img/start.png)'
    );

    var date = new Date();
    if (date.getTime() >= end.getTime()) {
      gameStatus = false;
      clearInterval(id);
    }
  }, 1000);
};

//ゲーム中のカウントダウン
ASSET.countTime = function(sec) {
  var score = 0;
  var startDate = new Date();
  console.log("start: ", startDate);

  var endDate = new Date(startDate.getTime() + sec * 1000)
  console.log("end: ", endDate);

  var cnt = sec;
  var id = setInterval(function() {
    cnt--;

    $('#timeKeeper').text('Time: ' + cnt);
    //現在日時と終了日時を比較
    var date = new Date();
    if (date.getTime() >= endDate.getTime()) {
      gameStatus = false;
      //$('#finish').html('GAME OVER<br>SCORE: ' + score).show();
      clearInterval(id);
      console.log('Finish!');
    }
  }, 1000);
}