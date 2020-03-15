var ID = 0;
var seconds = 0;

function ptimer() {
    document.getElementById("timer").innerHTML = seconds + " seconds have passed ";
    
 seconds++;
}


function start() {
    ID = window.setInterval(ptimer(), 6000);
    
}

function stop() {
    window.clearInterval(ID);
}