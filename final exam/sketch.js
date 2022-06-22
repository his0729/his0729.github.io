let x = 0, y = 0, d1 = 30;
let GameOver = false;
let Cir = [];
let score = 0;
let CirNum = 100
let s = 0;
let screen = 0
let speed = 3
let lastBoost_time = 0
let boostCoolDown = 3000



let x_r = 5, y_r = 20, w_r = 200, h_r = 20

let c1 = 0, slider_r = 5

let x_g = 250, y_g = 20, w_g = 200, h_g = 20
let c2 = 0,
    slider_g = 250

let x_b = 500, y_b = 20, w_b = 200, h_b = 20
let c3 = 0, slider_b = 500

function preload()
{
    eatSound = loadSound( 'media/eat.mp3' );
    deathSound = loadSound( 'media/death.mp3' );
    
}

function setup() {

    createCanvas(windowWidth, windowHeight);

    x = width / 2
    y = height / 2

    for (let i = 0; i < 0; i++) {
        Cir[i] = new circle();
    }
    

    
}



function draw() {
    
    if (screen == 0) {
        Start();
    } else if (screen == 1) {
        gameOn();
        
    } else if (screen == 2) {
        again();
    }
    
    

    
}


function Start() {
    fill(255)
    push();
    fill(255);
    rect(0, 0, windowWidth, windowHeight);
    pop();
    StartRect();
    StartText();
    textChoose();
    textPrintRGB();
    StartName();
    KeyPressed_space();

    if (mouseIsPressed) {
        if ((x_r <= mouseX && mouseX <= x_r + w_r - 10) && (c1 = mouseX)) {
            slider_r = mouseX;
            c1 = map(slider_r, x_r, x_r + w_r, 0, 255);
        }
    }

    if (mouseIsPressed) {
        if ((x_g <= mouseX && mouseX <= x_g + w_g - 10) && (c2 = mouseX)) {
            slider_g = mouseX;
            c2 = map(slider_g, x_g, x_g + w_g, 0, 255);
        }
    }

    if (mouseIsPressed) {
        if ((x_b <= mouseX && mouseX <= x_b + w_b - 10) && (c3 = mouseX)) {
            slider_b = mouseX;
            c3 = map(slider_b, x_b, x_b + w_b, 0, 255);
        }
    }



    slider_R(x_r, y_r, w_r, h_r);
    slider_G(x_g, y_g, w_g, h_g);
    slider_B(x_b, y_b, w_b, h_b);

    fill(c1, c2, c3);
    ellipse(width / 2, height / 2 - 50, 50, 50);

}

function gameOn() {
    background(255);
    
    if (millis() % 1 == 0) {
        Cir.push(new circle());
    }
    

    for (let i = 0; i < Cir.length; i++) {
        if (Cir.length > 200) {
            Cir.splice(0, 1);
        }
 

        Cir[i].display();
        Cir[i].move1();
        colliMeCircle();
    }
    
    background(255,100);
    push();
    fill(c1, c2, c3);
    stroke(0);
    ellipse(x, y, d1, d1);

    pop();
    textPrint();
    PressZ();
    move();
    
    
}

 

function again() {
    
    rectMode(CENTER);
    fill(255);
    push();

    fill(c1, c2, c3);
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
    stroke(0)
    pop();


    rect(windowWidth / 2, windowHeight / 2, 700, 500, 50)
    

    


    push();
    textAlign(CENTER);
    fill(c1, c2, c3);
    textStyle(BOLDITALIC);
    textSize(50);
    stroke(0);
    text("You Want Start Again?", windowWidth / 2, windowHeight / 2 - 30);
    pop();


    push();
    fill(c1, c2, c3);
    stroke(0);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    textSize(30);
    text("press R key", windowWidth / 2, windowHeight / 2 + 40);
    pop();
    keyPressed_again();

    push();
    fill(c1, c2, c3);
    stroke(0);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    textSize(30);
    text("( Your Score : " +score+" )", windowWidth / 2, windowHeight / 2 + 120);
    pop();
}



function move() {
    if (keyIsDown(UP_ARROW)) {
        y -= speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += speed;
    }

    x = constrain(x, 0 + d1 / 2, windowWidth - d1 / 2);
    y = constrain(y, 0 + d1 / 2, windowHeight - d1 / 2);
    KeyIsPressedZ();
    keyReleased();
    frame();
}

function KeyIsPressedZ() {
    if (keyIsPressed === true) {
        if (keyCode == 90) {
            speed = 8
            score -= 5
        }
    }
    
}

function keyReleased() {
    if (keyCode == 90) {
        frameCount = 0
        
        score += 0
        
        if(score <= 0) {
            score = 0
            speed = 3
            
        }
    }
}

function frame() {
    if (frameCount >= 1) {
        {
            speed = 3
            
        }
    }
}



function slider_R(x_r, y_r, w_r, h_r) {
    push();
    fill(255);
    rect(x_r, y_r, w_r, h_r, 5);
    fill(255, 0, 0);
    rect(slider_r, y_r, 10, h_r, 5);
    pop();
}

function slider_G(x_g, y_g, w_g, h_g) {
    push();
    fill(255);
    rect(x_g, y_g, w_g, h_g, 5);
    fill(255, 0, 0);
    rect(slider_g, y_g, 10, h_g, 5);
    pop();
}

function slider_B(x_b, y_b, w_b, h_b) {
    push();
    fill(255)
    rect(x_b, y_b, w_b, h_b, 5);
    fill(255, 0, 0);
    rect(slider_b, y_b, 10, h_b, 5);
    pop();
}

function KeyPressed_space() {
    if (keyCode == 32) {
        screen = 1
    }
}

function keyPressed_again() {
    if (key === 'r') {
        screen = 1
        reset();
    }
}

function colliMeCircle() {
    for (let i = 0; i < Cir.length; i++) {
        dis = dist(x, y, Cir[i].x, Cir[i].y)
        if (dis < Cir[i].d/2 + d1/2) {
            if (Cir[i].d > d1) {
                screen = 2
                deathSound.play();
            } else {
                d1 = d1 + 5
                score += 1000
                Cir[i].y += 100000
                eatSound.play();
            }

        }

    }
}

function reset() {
    x = windowWidth / 2
    y = windowHeight / 2
    d1 = 30
    speed = 5
    Cir = []
    score = 0
    for (let i = 0; i < 0; i++) {
        Cir[i] = new circle();
    }

}

function StartRect() {
    push();
    rectMode(CORNER);
    rect(windowWidth/5+ 40, windowHeight/2+55,830, 180, 50);
    pop();
}

function textPrint() {

    push();
    fill(c1, c2, c3);
    textSize(30);
    stroke(0);
    textStyle(BOLDITALIC);
    text("Score :  " + score, 50, 50);
    

    pop();
}




function textPrintRGB() {
    push();
    textSize(30);
    textStyle(BOLDITALIC);
    stroke(0);
    fill(c1, c2, c3);
    text("R", 100, 80);
    text("G", 340, 80);
    text("B", 590, 80);


    pop();
}

function StartText() {
    push();
    fill(c1, c2, c3);
    textStyle(BOLDITALIC);
    textSize(80)
    stroke(0);
    textAlign(CENTER);
    text("Press SpaceBar!", windowWidth / 2, windowHeight / 2 + 170);
    pop();
}


function StartName() {
    push();
    fill(c1, c2, c3);
    textSize(30);
    stroke(0);
    textStyle(BOLDITALIC);
    text("5764399 Hail Sung", windowWidth - 300, 60);

    pop();
}

function textChoose() {
    push();
    rect(5, 150, 200, 60, 10);

    push();
    fill(c1, c2, c3);
    textSize(20);
    stroke(0);
    textStyle(BOLDITALIC);
    text("Choose the color", 23, 173);
    pop();

    push();
    fill(c1, c2, c3);
    textSize(20);
    stroke(0);
    textStyle(BOLDITALIC);
    text("which you want", 25, 198);
    pop();
}

function PressZ() {
    push();
    textSize(40);
    textStyle(BOLDITALIC);
    textAlign(CENTER);
    stroke(0);
    fill(c1, c2, c3);
    text("Press Z :)" ,windowWidth/2, windowHeight/2+300);
    pop();
}



