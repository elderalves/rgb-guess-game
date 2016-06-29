
var ColorGame = function(){

  var color = {
    red: Math.round(Math.random() * 255),
    green: Math.round(Math.random() * 255),
    blue: Math.round(Math.random() * 255)
  }

  function randomOption(){
    var colorsArr = document.querySelectorAll('.color');

    var randomOption = Math.floor(Math.random() * 5);

    colorsArr.forEach(function(elem, index){
      if(randomOption === index){
        elem.style.backgroundColor = "rgba("+color.red+","+color.green+","+color.blue+",1)";
      } else {
        elem.style.backgroundColor = "rgba(0,31,0,1)";
      }

    });
  }

  function renderTitle(){
    var rgbTitle = document.querySelector('header h1');
    rgbTitle.innerHTML = "RGB(" + color.red + ',' + color.green + ',' + color.blue + ")";
  }

  return {
    init: function(){
      randomOption();
      renderTitle();
    }
  }
};

var game = new ColorGame();

game.init();
