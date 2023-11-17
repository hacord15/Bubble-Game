var timer = 60;   // kitne seconds ka time dena hai vo yaha deside hoga 
var score = 0;


// jispe click karoge wo element par event raise hoga, aur event listener 
// naa milne prr event ke parent par listerner dhundhega, waha bhi na milne prr
//  event parent ke parent ke parent par listener dhunega 


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
    var rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
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
        }

    }, 1000);
}
function increaseScore() {
    score += 10;   //+=10 ka mtlb hai ki ye previous value ko save krte chal rha h 
    document.querySelector("#scoreval").textContent = score;

}






// here we do function calling 
makebubble();
runTimer();
getNewHit();