var ix = 0;
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	ix = 0;
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	strokeWeight(4);
}

function nextColor(){
	ix = (ix + 1) % 7;
	return ["red", "orange", "yellow", "green", "blue", "indigo", "violet"][ix];
}

function draw() {
	stroke(nextColor());
	var prev = createVector(pmouseX, pmouseY);
	var curr = createVector(mouseX, mouseY);
	var delta = p5.Vector.sub(curr, prev);
	var left = createVector(delta.x, delta.y);
	var right = createVector(delta.x, delta.y);
	left.rotate(-90);
	right.rotate(90);
	line(curr.x + left.x, curr.y + left.y, curr.x + right.x, curr.y + right.y);
}

function keyTyped(){
	if (key === 'c'){
		clear();
	}
}
