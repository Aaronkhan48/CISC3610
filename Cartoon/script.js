var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//Tree
c.strokeStyle = "#725c42";
c.fillStyle = "#725c42";
c.fillRect(850, 275, 100, 400);
c.fill();
c.stroke();

c.beginPath();
c.arc(900, 200, 90, 0, Math.PI * 2, false);
c.strokeStyle = "#3A5F0B";
c.fillStyle = "#3A5F0B";
c.fill();
c.stroke();
c.closePath();

//Sun
c.beginPath();
c.arc(30, 80, 90, 0, Math.PI * 2, false);
c.strokeStyle = "#f9d71c";
c.fillStyle = "#f9d71c";

//Edges of Sun
c.moveTo(195, 85);
c.lineTo(10, 150);
c.lineTo(10, 30);

c.moveTo(168, 2); //TOP SUN EDGE
c.lineTo(0, 168);
c.lineTo(10, 20);

c.moveTo(160, 170);
c.lineTo(10, 150);
c.lineTo(10, 20);

c.moveTo(90, 240);
c.lineTo(5, 160);
c.lineTo(20, 20);

c.fill();
c.stroke();

//High & Short Grass
for (let i = 0; i <= canvas.width; i++) {
//Grass
  c.strokeStyle = "#567d46";
  c.fillStyle = "#567d46";
  c.beginPath();
  c.moveTo(100 + i * 100, 606);
  c.lineTo(0 + i * 100, 606);
  c.lineTo(50 + i * 100, 550);

  c.moveTo(50 + i * 100, 605); //X must be changed
  c.lineTo(-50 + i * 100, 605); //X must be changed
  c.lineTo(0 + i * 100, 562);
  c.fill();
  c.stroke();
}

//Dirt
for (let i = 0; i <= canvas.width; i++) {
  c.strokeStyle = "#9b7653";
  c.fillStyle = "#9b7653";  
  c.fillRect(0 + (i * 100), 595, 200, 500);
  c.fill();
  c.stroke();
}



//House
c.moveTo(20, 550);
c.lineTo(400,550);
c.moveTo(20, 300);
c.lineTo(400,300);
c.moveTo(20, 300);
c.lineTo(20,550)
c.moveTo(400, 300);
c.lineTo(400,550);
c.moveTo(350, 450);
c.lineTo(350,550);
c.moveTo(400, 450);

c.lineTo(350,450);
c.moveTo(210,175);
c.lineTo(20,300);
c.moveTo(210,175);
c.lineTo(400,300);

c.lineWidth = 5;
c.strokeStyle = "grey";
c.fillStyle = "pink";
c.fillRect(20, 300, 380, 250);
c.fill();
c.stroke();

//Roof
c.beginPath();
c.fillStyle = "grey";
c.strokeStyle = "black";
c.moveTo(210, 175);
c.lineTo(20, 300);
c.lineTo(400, 300);
c.closePath();
c.lineWidth = 5;
c.fill();
c.stroke();

//Cloud 1
c.beginPath();

c.moveTo(200,80);
c.bezierCurveTo(190,100,160,190,230,150);
c.bezierCurveTo(250,180,320,180,340,150);
c.bezierCurveTo(420,190,420,120,390,100);
c.bezierCurveTo(430,40,370,30,340,50);
c.bezierCurveTo(320,5,250,20,250,50);
c.bezierCurveTo(200,5,170,20,190,80);

c.strokeStyle = "black";
c.fillStyle = "white";
c.fill();
c.stroke();
c.lineWidth = 5;
c.closePath();


c.strokeStyle = "black";
c.fillStyle = "white";
c.fill();
c.stroke();
c.lineWidth = 5;
c.closePath();

//Doorknob
c.beginPath();
c.arc(392, 500, 3, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.closePath();
c.stroke();
c.fill();

//Windows
c.beginPath();//Oval
c.arc(208, 475, 45, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.fillStyle = "black";
c.closePath();
c.stroke();
c.fill();

c.beginPath(); 
c.fillStyle = "black";
c.fillRect(50, 325, 110, 85); //Left
c.fillRect(250, 325, 110, 85);//Right
c.closePath();
c.stroke();
c.fill();

c.strokeStyle = "pink";
c.fillStyle = "white";
c.moveTo(105,410);
c.lineTo(105,325);
c.moveTo(159,365);
c.lineTo(50,365);

c.moveTo(305,410);
c.lineTo(305,325);
c.moveTo(250,365);
c.lineTo(360,365);

c.moveTo(210,428);
c.lineTo(210,522);
c.moveTo(160,475);
c.lineTo(254,475);


c.stroke();
c.fill();


c.strokeStyle = "pink";
c.fillStyle = "pink";
c.fillRect(590, 495, 60, 30);
c.stroke();
c.fill();

//Concrete 
c.strokeStyle = "#808076";
c.fillStyle = "#808076";  
c.fillRect(0, 550, 600, 45);
c.stroke();
c.fill();

//Mailbox
c.strokeStyle = "#BA8C63";
c.fillStyle = "#BA8C63";  
c.fillRect(610, 525, 15, 70);
c.stroke();
c.fill();

c.beginPath();
c.strokeStyle = "#DA291C";
c.fillStyle = "	#DA291C"; 
c.fillRect(605, 495, 5, 30);
c.moveTo(608, 492);
c.lineTo(608, 490);
c.lineTo(612, 492);
c.closePath();
c.lineWidth = 5;
c.fill();
c.stroke();