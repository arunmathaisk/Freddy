function preload(){
    newFont = loadFont('SassoonInfantStd-Bold.otf');
}
function setup() {
    // createCanvas(400, 400);
    // createCanvas(windowWidth, windowHeight);
    startlearn =  createA("blockpad.html","Start Learning")
    startlearn.style("font-family",'ButterflyKids-Regular.ttf')
    startlearn.style("color","black")
    startlearn.style('font-size', '50px');
    beginShape()
    endShape()
    createCanvas(displayWidth, displayHeight);
    background(255,255,255)
    textAlign(CENTER,CENTER)
    textFont(newFont)
    textSize(150);
    translate(width / 2, height / 2);
    text("Blockpad",0,-200)
    startlearn.position(width / 2 -150 , height / 2);
    
}

// function draw(){
//     let x = new Piece(500,500,15)
//     x.show()
// }


class Piece {
    constructor(x, y, scl) {
      this.x = x;
      this.y = y;
      this.scl = scl;
  
      // border[0] -> top
      // border[1] -> right
      // border[2] -> bottom
      // border[3] -> left
      this.border = [];
      for (let i = 0; i < 4; i++) {
        this.border[i] = random([true, false]);
      }
    }
  
    drawBorder(theta) {
      let startPoint = createVector(-0.5 * this.scl, -0.5 * this.scl);
      let endPoint = createVector(0.5 * this.scl, -0.5 * this.scl);
      let offsetX = this.scl * 0.35;
      let offsetY = -this.scl * 0.2;
  
      push();
      translate(this.x, this.y);
      rotate(theta);
      beginShape();
      curveVertex(startPoint.x, startPoint.y);
      // curveVertex(startPoint.x, startPoint.y);
      curveVertex(startPoint.x + offsetX, startPoint.y);
      curveVertex(startPoint.x + offsetX, startPoint.y + offsetY);
      curveVertex(endPoint.x - offsetX, endPoint.y + offsetY);
      curveVertex(endPoint.x - offsetX, endPoint.y);
      curveVertex(endPoint.x, endPoint.y);
      curveVertex(endPoint.x, endPoint.y);
      endShape();
      pop();
    }
  
    show() {
      noFill();
      stroke(0);
      strokeWeight(2)
      for (let i = 0; i < this.border.length; i++) {
        if (this.border[i]) {
          let theta = i * PI / 2;
          this.drawBorder(theta);
        }
      }
    }
  }