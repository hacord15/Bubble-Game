var timer = 10;   // kitne seconds ka time dena hai vo yaha deside hoga 
var score = 0;
var hitrn = 0;
// bubble event------------------------------------
// jispe click karoge wo element par event raise hoga, aur event listener 
// naa milne prr event ke parent par listerner dhundhega, waha bhi na milne prr
//  event parent ke parent ke parent par listener dhunega 
// ---------------------------------------------------------------------------------increaseScore() 

//Bubble Making 
function makebubble() {
    var clutter = ''

    for (var i = 0; i <= 167; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function getNewHit() {
    hitrn= Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}



//Timer function
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {  // ye isliye liya hai kyuki nhi to ye minus me jaane lagta 
            timer--;      //ye seconds ko km krega like back counting type 
            document.querySelector("#timerval").textContent = timer;  //ye HtML se select krega 
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }

    }, 1000);
}
function increaseScore() {
    score += 10;   //+=10 ka mtlb hai ki ye previous value ko save krte chal rha h 
    document.querySelector("#scoreval").textContent = score;

}



document.querySelector("#pbtm").addEventListener("click",function(dets){
 var clickednum = Number(dets.target.textContent);
 if(clickednum === hitrn){
    increaseScore();
    makebubble();
    getNewHit();
 }
});


// .target VO HOTA HAI  jispar click hua hota hai---isse div aaya 
// and we add .textContent isse div ka sirf text aayega 
// Pahle ye ek string isko hame ek number banana padega 



// here we do function calling 
makebubble();
runTimer();
getNewHit();
// increaseScore();
