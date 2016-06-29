var game = new ColorGame();
game.init('hard');

var btnEasy = document.querySelector('#easy');
var btnHard = document.querySelector('#hard');
var btnNew = document.querySelector('#newColors');
var btnTryAgain = document.querySelector('#tryAgain');

btnEasy.addEventListener('click', function(){
  game.init('easy');
});
btnHard.addEventListener('click', function(){
  game.init('hard');
});
btnNew.addEventListener('click', function(){
  game.init('hard');
});
btnTryAgain.addEventListener('click', function(){
  game.init('hard');
});
