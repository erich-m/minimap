
  var a = 0;
var acc = 0;
var maxSpeed = 20;

  var skyG = 155;
  var skyB = 255;
new p5(function(p) {
  let m;
  let cnv;
  
  var pos;
  p.preload = function() {
    m = p.loadImage('city_map.png');
  };
  p.setup = function() {
    cnv = p.createCanvas(100, 100, p.P2D);
    cnv.position(0, 0);
    pos = p.createVector(-335, -335);
  };

  p.draw = function(b) {
    p.background(34, 177, 76);
  p.scale(2);
    p.translate(25, 25);
    p.push();
    p.push();
    p.rotate(p.radians(a));
    p.fill(0, 0, 255);

    p.image(m, pos.x, pos.y, 400, 400);
    p.pop();
p.strokeWeight(0);
    p.fill(255, 255, 0);
    p.rectMode(CENTER);
    p.rect(0,0,10,20,2);
    if (p.keyIsDown(p.DOWN_ARROW)) {
      var forw = p5.Vector.fromAngle(p.radians(90 - a));
      forw.mult(acc/24.3);
      pos.sub(forw);
    }
    if (p.keyIsDown(p.UP_ARROW)) {
      var back = p5.Vector.fromAngle(p.radians(90 - a));
      back.mult(acc/24.3);
      pos.add(back);
    }
    if (p.keyIsDown(p.LEFT_ARROW) && (p.keyIsDown(p.UP_ARROW) || p.keyIsDown(p.DOWN_ARROW))) {
      if(p.keyIsDown(p.UP_ARROW)){
      a += 2;
         }
      else {
        a-=2;
      }
    }
    if (p.keyIsDown(p.RIGHT_ARROW) && (p.keyIsDown(p.UP_ARROW) || p.keyIsDown(p.DOWN_ARROW))) {
      if (p.keyIsDown(p.UP_ARROW) ){
      a -= 2;
      }
      else {
        a+=2;
      }
    }
    p.pop();
    p.noFill();
    p.scale(1);
    p.strokeWeight(5);
    p.resetMatrix();
    p.rect(0,0,100,100);
  };
});
let m;
var pos2;
let c;
let tower = [];
let h;
let f;
function preload(){
  m = loadImage('city_map_1.png');
    c=loadModel('car.obj');
  for(var t = 0;t < 3;t++){
    tower.push(loadImage('tower_'+t+'.png'));
  }
  h = loadModel('city_hall.obj');
  f = loadModel('freeform.obj');
}
function setup() {
  createCanvas(500, 500, WEBGL);
  pos2 = createVector(-3250,-3250);
}

function draw() {
  background(0,155-(100*cos(radians(millis()*0.001))+100),255-(100*cos(radians(millis()*0.001))+100));
  orbitControl();
  push();
  fill(34,177,76);
  rotateX(PI/2);
  noStroke();
  translate(0,0,-176);
  plane(20000,20000);
  pop();
  
  //draw map
  push();
  rotateY(radians(-a));
  rotateX(radians(90));
  push();
  rotateX(PI/2);
  rotateY(radians(-a));
  translate(0,-175,0);
  fill(255,255,0);
  model(c);
  translate(0,175,0);
  rotate(-PI/2);
  pop();
  translate(pos2.x,pos2.y,-175);//Left+//Right-//forward+//back-//Up+//Down-
  
  noStroke();
  texture(m);
  plane(10000,10000);
  
  push();
  //drawing buildings//left-//right+//foward-//back+//Up+//down-
rotateX(PI);
  
  
  push();
  translate(1800,-800,-750/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,750,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  translate(1800,1275,-950/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,950,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  translate(-4400,-2600,-900/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,900,tower,2,2,1,1,1,0);
  pop();
  
  push();
  translate(-4400,2750,-925/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,925,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  rotateZ(PI/2);
  translate(-4450,-75,-1100/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,1100,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  rotateZ(PI/2);
  translate(-4450,2450,-950/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,950,tower,2,2,1,1,1,0);
  pop();
  
  push();
  rotateZ(-PI/2);
  translate(-4450,2625,-900/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,900,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  rotateZ(-PI/2);
  translate(-4450,-50,-950/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,950,tower,2,2,1,1,1,0);
  pop();
  
  push();
  rotateZ(-PI/2);
  translate(-4450,-2550,-900/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,900,tower,2,2,1,1,1,0);
  pop();
  
  push();
  rotateZ(-PI/2);
  translate(1750,-1175,-900/2);//left-//right+//foward-//back+//Up-//down+
  recPrism(655,1700,1000,tower,2,2,1,1,1,0);
  pop();
  
  
  push();
  rotateX(-PI/2);
  rotateY(-PI/2);
  translate(900,0,975);//forward and back//up and down//side to side
  stroke(0);
  fill(155);
  scale(-5.1);
  model(h);
  pop();
  
  
  push();
  stroke(69, 33, 3);
  translate(-50,0,0);
  rotateX(PI/2);
  scale(-5.1);
  fill(119, 83, 53);
  model(f);
  pop();
  
  //drawing buildings//left-//right+//foward-//back+//Up+//down-
  pop();
  pop();
  //draw map
  
  if (keyIsDown(DOWN_ARROW)) {
    if(acc<maxSpeed){
    acc+=0.2;
    }
          var forw = p5.Vector.fromAngle(radians(-a-90));
    forw.mult(acc);//12.6
          pos2.add(forw);
        }
       else  if (keyIsDown(UP_ARROW)) {
         if(acc<maxSpeed){
    acc+=0.2;
    }
          var back = p5.Vector.fromAngle(radians(-a-90));
          back.mult(acc);//12.6
          pos2.sub(back);
        }
  else {
    if (acc>0){
      acc-=0.2;
    }
  }
}
function recPrism(l,w,d,faceArray,o0,o1,o2,o3,o4,o5){
  push();
  translate(0,0,-d/2);
  texture(faceArray[o0]);//reversed//front
  plane(l,w);
  translate(0,0,d);
  texture(faceArray[o1]);//not reversed//back
  plane(l,w);
  pop();
  
  push();
  rotateX(radians(90));
  translate(0,0,w/2);
  texture(faceArray[o2]);//not reversed//top
  plane(l,d);
  translate(0,0,-w);
  texture(faceArray[o3]);//Reversed//bottom
  plane(l,d);
  pop();
  
  push();
  rotateX(radians(90));
  rotateY(radians(90));
  translate(0,0,-l/2);
  texture(faceArray[o4]);//Reversed//left
  plane(w,d);
  translate(0,0,l);
  texture(faceArray[o5]);//Not reversed//right
  plane(w,d);
  pop();
}
