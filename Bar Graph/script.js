var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

var fruit = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 3, color: "green" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 8, color: "purple" }
];

c.beginPath();
c.moveTo(20, 500);
c.lineTo(500,500);
let x = 20;
let y = 500; //Origin
c.moveTo(20, 20);
c.lineTo(20, 500);

c.stroke();

for(let i =0; i <5; i++){
  //y
  c.moveTo(x -5 ,y - (i *100) );
  c.lineTo(x , y-(i *100));
  c.fillText(5 * i, x -10, y -(i*100));
  //x
  c.moveTo(x + (i *100) ,y - 5 );
  c.lineTo(x + (i *100), y);
  c.fillText(5 * i, x +(i *100), y +10);
  c.stroke();
}

  for(let j = 0; j <fruit.length +1; j++){
  let quant = fruit[j].quantity;
  c.fillStyle = fruit[j].color;
  c.fillRect((x + (25 * j )), y, 50, -20 * quant); 
  c.fillStyle = "black";
  c.fillText(fruit[j].name, x + (j * 25), y +20);
  c.fillText(fruit[j].quantity, x + (j * 25), y +30);
  x+= 25;
  
}