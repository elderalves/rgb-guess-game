var ColorGame = function(){

  var that = this;

  function randomColor(){
    var color = {
      red: Math.round(Math.random() * 255),
      green: Math.round(Math.random() * 255),
      blue: Math.round(Math.random() * 255)
    }
    return color;
  }

  // To create DOM elements and place into the Container (.box-colors)
  function createOptions(quantity){
    var boxColors = document.querySelector('.box-colors');
    boxColors.innerHTML = "";
    for(i = 0; i < quantity; i++){
      var colorElem = document.createElement("li");
      colorElem.classList.add('color', "color--animation");
      colorElem.addEventListener('click', function(){
        guessColor(this, this.style.backgroundColor);
      });
      boxColors.appendChild(colorElem);
    }
  }

  function randomOption(level, color){

    var numBoxes = (level == "hard" ? 6 : 3);
    createOptions(numBoxes);
    var colorsArr = document.querySelectorAll('.color');
    var randomOption = Math.floor(Math.random() * (numBoxes - 1));
    colorsArr.forEach(function(elem, index){
      if(randomOption === index){
        elem.style.backgroundColor = "rgba("+color.red+","+color.green+","+color.blue+",1)";
      } else {
        elem.style.backgroundColor = "rgba("+Math.round(Math.random() * 255)+","+Math.round(Math.random() * 255)+","+Math.round(Math.random() * 255)+",1)";
      }
    });

    return color;
  }

  function renderTitle(color){
    var rgbTitle = document.querySelector('header h1');
    rgbTitle.innerHTML = "RGB(" + color.red + ', ' + color.green + ', ' + color.blue + ")";
  }

  function guessColor(element, answer){
    var colorGame = document.querySelector('.top-header h1').textContent.toLowerCase();
    console.log(answer);
    if(colorGame == answer){
      youWin(answer, element);
    } else {
      element.classList.add('color--wrong');
    }
  };

  function youWin(color, elemWinner){
    var topHeader = document.querySelector('.top-header');
    var colorsArr = document.querySelectorAll('.color');

    topHeader.style.backgroundColor = color;

    colorsArr.forEach(function(elem){
        elem.classList.remove('color--wrong', 'color--animation');
        elem.style.backgroundColor = color;
    });

    elemWinner.classList.add('color--winner');
  }

  return {
    init: function(level){
      var color = randomColor();
      randomOption(level, color);
      renderTitle(color);
    }
  }
};
