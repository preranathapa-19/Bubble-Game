var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
   score +=10;
   document.querySelector("#scoreval").textContent = score;
}
function hitNewNum() {
  hitrn= Math.floor(Math.random()*10);
   document.querySelector("#ranhit").textContent = hitrn;
}


function makebubble(){
let clutter = "";

for(var i = 0; i<=132; i++){
   let ran = Math.floor(Math.random()*10)
   clutter += `<div class = "bubble">${ran}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer(){
 let timeint= setInterval(function(){
   if(timer > 0){
       timer--;
      document.querySelector("#timerval").textContent = timer;
   }else{
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over 🤪🤪</h1>`;
   } 
   },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",
     function(dets){
      var clickednum = Number(dets.target.textContent);
      if(clickednum === hitrn){
         increaseScore();
         makebubble();
         hitNewNum();
      }
});

hitNewNum()
setTimer()
makebubble()