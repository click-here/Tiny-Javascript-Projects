var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = color
		c.stroke();
	}
}
var radius = Math.floor(Math.random()*(40-10+1)+10);;
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = (innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5) * 3;
var dy = (Math.random() - 0.5) * 3;

cir = new Circle(x,y,dx,dy,radius,"red");

cir.draw();