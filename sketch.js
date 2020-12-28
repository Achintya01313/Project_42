function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();
   
    strokeWeight(8)
    noFill();
    stroke(0, 255, 255);
    let secondHand = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondHand);
    
    stroke(255,100,250);
    let minuteHand = map(mn, 0, 60, 0,  360);
    arc(0, 0, 279, 279, 0, minuteHand);
    
    stroke(0,255,100);
    let hourHand = map(hr % 12, 0, 12, -90, 360);
    arc(0, 0, 259, 259, 0, hourHand);

    push();
    rotate(secondHand);
    stroke(0, 255, 255);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(minuteHand);
    stroke(255, 100, 250);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(hourHand);
    stroke(0, 255, 100);
    line(0, 0, 40, 0);
    pop();

    stroke(105, 0, 255);
    point(0, 0);
    
    // fill(255);
    // noStroke();
    // text(hr + ':' + mn + ':' + sc, 10, 200);
}