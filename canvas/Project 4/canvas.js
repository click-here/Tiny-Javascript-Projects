var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = '#c00fee'
c.fillRect(0, 0, 100, 100);

// // Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300,100);
// c.strokeStyle = "#023094"
// c.stroke();


// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#334455"
// c.stroke();


var colorArray = [
	// '#EBE3D9',
	'#E0CDAF',
	'#C2BC74',
	'#6E615A',
	'#807E82',
	'#B8B8B8'
]
function getRandomColor() { //https://stackoverflow.com/a/1484514
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var maxRadius = 40;
var minRadius = 10;
var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove',
	function(event) {
		// console.log(mouse);
		mouse.x = event.x
		mouse.y = event.y
	})

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init()
})

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy
		}
		this.x += this.dx
		this.y += this.dy

		// interactivity

		if (mouse.x - this.x < 50 && mouse.x -this.x > -50 && mouse.y -this.y < 50 && mouse.y - this.y > -50) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
			
		} else if (this.radius > this.minRadius){
			this.radius -= 1;
		}
		this.draw()
	}
}

var circleArray = [];
function init() {
	
	circleArray = [];
	for (var i =0 ; i < 500; i++){
		var radius = Math.floor(Math.random()*(20-8+1)+8);;
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 3;
		var dy = (Math.random() - 0.5) * 3;
		
		circleArray.push(new Circle(x,y,dx,dy,radius))

	}

 