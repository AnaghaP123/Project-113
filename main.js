function preload() {}

function setup()
{
    canvas = createCanvas( 600, 400);
    canvas.position (600, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 20, 20, 540, 360);
    stroke(10, 10, 10);

    fill(220, 100, 0);
    rect(27, 20, 525, 14);
    fill(100, 200, 100);
    rect(560, 27, 14, 345);
    fill(150, 32, 90);
    rect(20, 27, 14, 340);
    fill(55, 65, 200);
    rect(27, 366, 525, 14);

    fill(200, 40, 15);
    circle(27, 27, 50);
    fill(207, 60, 10);
    circle(50, 15, 32);
    fill(214, 80, 5);
    circle(62, 35, 32);
    fill(170, 28, 21);
    circle(20, 64, 32);
    fill(180, 30, 70)
    circle(37, 84, 32);

    fill(200, 180, 2)
    circle(573, 27, 50);
    fill(210, 165, 1);
    circle(546, 35, 32);
    fill(214, 130, 1);
    circle(532, 19, 32);
    fill(170, 189, 50);
    circle(580, 58, 32);
    fill(140, 198, 98);
    circle(564, 74, 32);
    
    fill(10, 150, 230);
    circle(573, 373, 50);
    fill(10, 170, 175);
    circle(560, 340, 32);
    fill( 10, 190, 134);
    circle(575, 317, 32);
    fill (40, 100, 200);
    circle(546, 380, 32);
    fill( 60, 55, 160);
    circle(528, 364, 32);
    
    fill(100, 15, 170);
    circle(27, 373, 50);
    fill(85, 15, 200);
    circle(54, 382, 32);
    fill(72, 15, 223);
    circle(70, 370, 32);
    fill(121, 24, 130);
    circle(20, 340, 32);
    fill(140, 16, 103);
    circle(32, 320, 32);
}

function take_snapshot()
{
    save('picture.png');
}
