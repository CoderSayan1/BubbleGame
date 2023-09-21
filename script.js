let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
  let clutter = "";

  for (let i = 0; i <= 200; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over!!</h1>`
            let mySound = new Audio('audio/audio.mp3');
            mySound.play();
        }
    }, 1000);
}

function getHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function getScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    let clickedNum = Number(dets.target.textContent)
    // console.log(clickedNum)
    if(hitrn === clickedNum){
        getScore();
        getHit();
        makeBubble();
    }
})

makeBubble();
runTimer();
getHit();