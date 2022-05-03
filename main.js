x = "0";
y = "0";

draw_circle="";
draw_rect="";

var SpeechRecongnition = window.webkitSpeechRecognition;

var recognition = new SpeechRecongnition;

function start() {
document.getElementById("status").innerHTML = "System is listening please speak";
recognition.start();
}

recognition.onresult = function(event){
 console.log(event);   
 var content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized as : " + content;

 if (content == "circle") {
 x = Math.floor(Math.random() * 900);
 y = Math.floor(Math.random() * 600);
 draw_circle = "set"; 
 document.getElementById("status").innerHTML = "Started drawing the circle";
 }
 if (content == "rectangle") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    draw_rect = "set"; 
    document.getElementById("status").innerHTML = "Started drawing the rectangle";
    }
}


function setup() {
  canvas = createCanvas(900,600);  
}

function draw() {
 if (draw_circle == "set") {
 circle(x,y,100) 
 document.getElementById("status").innerHTML = "circle is drawn";
 draw_circle = "";   
 }  
 if (draw_rect == "set") {
    rect(x,y,150,100) 
    document.getElementById("status").innerHTML = "rectangle is drawn";
    draw_rect = "";   
    }  
}




