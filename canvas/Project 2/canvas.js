var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function triangle(side){
	c.translate(300,300)
	var h = side * (Math.sqrt(3)/2); //https://stackoverflow.com/a/8937497
	c.moveTo(0, -h / 2);
    c.lineTo( -side / 2, h / 2);
    c.lineTo(side / 2, h / 2);
    c.lineTo(0, -h / 2);
    c.fillStyle = "#c00fee"
    c.fill(); 

}
triangle(100);
