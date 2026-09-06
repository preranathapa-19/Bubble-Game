var timer = 60;
var score = 0;

function increaseScore(){
   score +=10;
   document.querySelector("#scoreval").textContent = score;
}
function hitNewNum() {
  let ran= Math.floor(Math.random()*10);
   document.querySelector("#ranhit").textContent =ran;
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
   } 
   },1000);
}

hitNewNum()
setTimer()
makebubble()