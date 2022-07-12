function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw() {
    image(video, 150, 100, 320, 240);
    tint(tint_color);
    fill(0, 128, 0); 
stroke(0, 128, 0); 
circle(20, 20, 30); 
rect(20,20,550,10);
circle(560, 25, 30); 
rect(560,25,10,425);
circle(560, 450, 30); 
rect(20,20,10,425);
circle(20, 445, 30); 
rect(20,445,550,10);
}

function take_snapshot(){
    save('student_name.png');

}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
fill(0, 128, 0); 
stroke(0, 128, 0); 
circle(300, 320, 240); 
rect(350,150,30,10);