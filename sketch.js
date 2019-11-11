let mic;
let e1, e2, NIL;

function setup() {
    createCanvas(windowWidth,windowHeight);
    //background(0);


    mic = new p5.AudioIn();
    mic.start();



}

function draw() {
    background('brown');
    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 400);

    noStroke();
    rectMode(CENTER);
    e1 = new Eye(width * 0.47, height / 2.2, height / 10);
    e2 = new Eye(width * 0.53, height / 2.2, height / 10);
    NIL = new Eye2(width * 0.4, height / 2.2, 120);
    NIL2 = new Eye2(width * 0.6, height / 2.2, 100);


    let boca_w = width / 1.75
    noStroke();

    console.log(mov);

    rectMode(CENTER);

    /////ORELLES   
    fill('black');
    ellipse(width * 0.6, height / 4, height / 3, height / 3);

    fill('black');
    ellipse(width * 0.4, height / 4, height / 3, height / 3);

    ////cara
    fill('black');
    ellipse(width / 2, height / 2, height / 2, height / 2);


    ///mofletes
    fill('pink');
    ellipse(width / 2, height / 1.8, width / 5, height / 3);


    ////fron
    fill('pink');
    ellipse(width / 1.9, height / 2.3, width / 12, height / 3.5);

    fill('pink');
    ellipse(width / 2.1, height / 2.3, width / 12, height / 3.5);



    // fill('orange');
    //quad(width / 10, height / 10, width / 10, height / 10, width / 10, height / 10, width / 10, height / 10);

    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
    //e3.update(mouseX, mouseY);
    e1.display();
    e2.display();
    //e3.display();

    ////NAS
    fill('red');
    ellipse(width / 2, height / 1.9, height / 20, height / 20);

    ////boca
    fill('red');
    stroke('black');
    strokeWeight(9)
    rect(width / 2, height / 1.6, width / 15 + mov, height / 150 * mov, 200);

    fill('black');
    ellipse(width / 2, height / 1.6, height / 30, height / 30);
push();
    fill('red');
    strokeWeight(0);
    ellipse(width / 2, height / 1.63, height / 40, height / 40);

pop();






if (width < 600) {
            rectMode(CENTER);
    background('black');
   
    
           /////ORELLES   
           fill('pink');
            ellipse(width * 0.80, height / 4.5, width /2, width / 2);
    
            fill('pink');
            ellipse(width * 0.20, height / 4.5, width /2, width / 2);
    
    
    
     push();
    strokeWeight(0);
    
    
    ////cara
    fill('pink');
    ellipse(width / 2, height / 2, height / 2, height / 2);
    
        ////fron
    fill('orange');
    ellipse(width / 1.7, height / 2.2, width / 4, height / 3.5);

    fill('orange');
    ellipse(width / 2.5, height / 2.2, width / 4, height / 3.5);
      ///mofletes
    fill('orange');
    ellipse(width / 2, height / 1.72, width / 1.3, height / 3.5);
    
    
    fill('red');
    quad(350, 222, 350, 333, 140, 222, 140, 333);
    
         
            //e1.update(mouseX, mouseY);
            //e2.update(mouseX, mouseY);
            NIL.update(mouseX, mouseY);
            NIL2.update(mouseX, mouseY);
            //e1.display();
            //e2.display();
            NIL.display();
            NIL2.display();
    
    
    
          ////NAS
    fill('red');
    ellipse(width / 2, height / 1.8, height / 20, height / 20);
  
pop();
    
    
       ////boca
    fill('pink');
    stroke('red');
    strokeWeight(9)
    rect(width / 2, height / 1.5, width / 90 * mov, height / 101 * mov, 200);
push();
    fill('brown');
    strokeWeight(0);
    ellipse(width / 2, height / 1.5, height / 30, height / 30);

    fill('pink');
    strokeWeight(0);
    ellipse(width / 2, height / 1.53, height / 40, height / 40);

pop();
        


    }
    


 }

/////////////////////
function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function (mx, my) {
        this.angle = atan2(my - this.y, mx - this.x);
    };

    this.display = function () {
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill('black');
        ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
        pop();
    };
}

function Eye2(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function (mx, my) {
        this.angle = atan2(my - this.y, mx - this.x);
    };

    this.display = function () {
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill('blue');
        ellipse(this.size /4, 0, this.size / 2, this.size / 2);
        pop();
    };
}




function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
