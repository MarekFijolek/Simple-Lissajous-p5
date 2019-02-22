var t = 0;
var points=[]

function setup() {
  createCanvas(800, 800);
  fill(255);
  textSize(15);

  aSlider = createSlider(0, 20, 7, 0.1);
  aSlider.position(150, 20);
  aSlider.size(500)
  bSlider = createSlider(0, 20, 6, 0.1);
  bSlider.position(150, 40);
  bSlider.size(500)

  ASlider = createSlider(1, 200, 100, 0.1);
  ASlider.position(150, 80);
  ASlider.size(500)
  BSlider = createSlider(1, 200, 100, 0.1);
  BSlider.position(150, 100);
  BSlider.size(500)

  midWidth = width / 2;
  midHeight = height / 2;
}

function draw() {
  background(0);

  fill(255);
  
  var a = Math.floor(aSlider.value());
  var b = Math.floor(bSlider.value()); 
  
  var A = Math.floor(ASlider.value()); 
  var B = Math.floor(BSlider.value());

  text("a", 130, 25);
  text("=   " + a, 660, 29);

  text("b", 130, 45);
  text("=   " + b, 660, 49);

  text("A", 130, 85);
  text("=   " + A, 660, 89);

  text("B", 130, 105);
  text("=   " + B, 660, 109)

  text("x = A * sin(a * t + PI/2)", 350, 145)
  text("y = B * sin(b * t)", 350, 165)
  text("Marek Fijolek 2019", 350, 780)

  stroke(255)
  strokeWeight(1);

  points.push({x: (midWidth + A*sin(a*t+PI/2)), y: (midHeight + B*sin(b*t))})
  if (t >= 360) {
    t = 0
  }

  if (points.length > 500) {
    points.shift()
  }
  
  t+=0.02
  fill(255);
  for (j = 0; j < points.length; j++) {
    if (j != points.length - 1) {
      line(points[j].x, points[j].y, points[j+1].x, points[j+1].y)
    }
  }
}
