var h,m,s;




function setup() {
  createCanvas(1200,600);
  
  let h = hour(12);
text('Current hour:12\n' + h, 5, 50%12);
let m = minute(60);
text('Current minute:60 \n' + m, 5, 50%60);
let s = second(60);
text('Current second: 60\n' + s, 5, 50%60);
angleMode(DEGREES);


}

function draw() {
  background(56,0,0);  
  sAngle=map(s,0,60,360)
mAngle=map(m,0,60,360)
hAngle=map(h,0,60,360)
  push()
  rotate(sAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(mAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,90,0)
  pop()
  push()
  rotate(hAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,80,0)
  pop()
  drawSprites();
}