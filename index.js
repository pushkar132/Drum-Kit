for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", onClick);

function onClick() {
  soundToPlay(this.innerHTML);
  pressedAnimation("."+this.innerHTML);
}
function soundToPlay(ch){
  switch (ch) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sounds/tom-3.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sounds/tom-4.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("sounds/snare.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("sounds/crash.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sounds/kick-bass.mp3");
      l.play();
      break;
  }
}
document.addEventListener("keydown",keyboard);
function keyboard(event){
  soundToPlay(event.key);
  pressedAnimation("."+event.key);
}

function pressedAnimation(key){
  document.querySelector(key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(key).classList.remove("pressed");
  },100);
}
