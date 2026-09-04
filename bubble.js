function makebubble(){
let clutter = "";

for(var i = 0; i<=132; i++){
   let ran = Math.floor(Math.random()*10)
   clutter += `<div class = "bubble">${ran}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

makebubble()