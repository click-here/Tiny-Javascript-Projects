var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = '#c00fee'
// c.fillRect(100, 100, 100, 100);

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


function getRandomColor() { //https://stackoverflow.com/a/1484514
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy
		}
		this.x += this.dx
		this.y += this.dy
		this.draw()
	}
}

var circleArray = [];

for (var i =0 ; i < 200; i++){
	var radius = Math.floor(Math.random()*(40-10+1)+10);;
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 3;
	var dy = (Math.random() - 0.5) * 3;
	
	circleArray.push(new Circle(x,y,dx,dy,radius,getRandomColor()))

}


function animate() {
	requestAnimationFrame(animate);
	// c.clearRect(innerWidth/2-200,innerHeight/2-200, 400,400);
	c.clearRect(0,0,innerWidth,innerHeight)
	for (var i = 0; i < circleArray.length; i++){

		circleArray[i].update();
	}

}

animate();