function makebubble(){
let clutter = "";

for(var i = 0; i<=132; i++){
   let ran = Math.floor(Math.random()*10)
   clutter += `<div class = "bubble">${ran}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
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
setTimer()
makebubble()