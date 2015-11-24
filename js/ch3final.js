var clickedTime;
var createdTime;
var reactionTime;
var shapes = ["0%", "50%"]

function getRandomColor(){
  var letters = '0123456789ABCDEF'.split('');
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color+= letters[Math.round(Math.random()*15)];
  };
  return color;
}

function makeBox(){

  var time=Math.random();

  //Setting the max time 3000=3 seconds
  time=time*3000;

  setTimeout(function(){
    var randomShape = shapes[Math.floor(Math.random()*shapes.length)];
    var top=Math.random();
    top=top*300;
    var left=Math.random();
    left=left*300;

    document.getElementById("box").style.display="block";
    document.getElementById("box").style.backgroundColor=getRandomColor();
    document.getElementById("box").style.borderRadius=randomShape;
    document.getElementById("box").style.marginLeft=left + "px";
    document.getElementById("box").style.marginTop=top + "px";

    createdTime=Date.now();
  }, time);

}

document.getElementById("box").onclick=function(){
  clickedTime=Date.now();
  reactionTime=(clickedTime - createdTime)/1000;
  document.getElementById("time").innerHTML=reactionTime;
  this.style.display="none";
  makeBox();
}

makeBox();