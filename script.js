var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
		_parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{ //

this.load.image('star','https://examples.phaser.io/assets/particlestorm/star.png');
this.load.image('rain', 'https://examples.phaser.io/assets/particlestorm/particles/rain.png')
	this.load.image('sky','https://phaser.io/content/tutorials/making-your-first-phaser-3-game/part3.png');
	this.load.image('dude', 'https://examples.phaser.io/assets/sprites/arrow.png')
	this.load.image('cloud-platform', 'https://examples.phaser.io/assets/particlestorm/cloud.png');
	
	this.load.image('ground', 'https://examples.phaser.io/assets/sprites/platform.png');
	
	this.load.image('sonic', 'https://examples.phaser.io/assets/sprites/sonic_havok_sanity.png');
	
	this.load.image('car', 'https://examples.phaser.io/assets/sprites/car90.png');
	
	this.load.image('health', 'https://examples.phaser.io/assets/sprites/healthbar.png');
}

function create ()
{

	var dropZone = this.add.image(400,300,'sky');
	
	var ground = this.add.image(100,400,'ground');
	ground.inputEnabled = true;
	ground.setInteractive();
	this.input.setDraggable(ground);
	
	var ground = this.add.image(100,300,'ground');
	ground.inputEnabled = true;
	ground.setInteractive();
	this.input.setDraggable(ground);
	
	var cloud = this.add.image(100,200,'cloud-platform');
	cloud.inputEnabled = true;
	cloud.setInteractive();
	this.input.setDraggable(cloud);
	
	var cloud2 = this.add.image(300,200,'cloud-platform');
	cloud2.inputEnabled = true;
	cloud2.setInteractive();
	this.input.setDraggable(cloud2);
	
	var rain = this.add.image(150,200,'rain');
	rain.inputEnabled = true;
	rain.setInteractive();
	this.input.setDraggable(rain);
	
	var rain = this.add.image(250,200,'rain');
	rain.inputEnabled = true;
	rain.setInteractive();
	this.input.setDraggable(rain);
	
	var rain = this.add.image(325,200,'rain');
	rain.inputEnabled = true;
	rain.setInteractive();
	this.input.setDraggable(rain);
	
	var rain2 = this.add.image(550,200,'rain');
	rain2.inputEnabled = true;
	rain2.setInteractive();
	this.input.setDraggable(rain2);
	
	var rain2 = this.add.image(650,200,'rain');
	rain2.inputEnabled = true;
	rain2.setInteractive();
	this.input.setDraggable(rain2);
	
	var rain2 = this.add.image(725,200,'rain');
	rain2.inputEnabled = true;
	rain2.setInteractive();
	this.input.setDraggable(rain2);
	
	var star = this.add.image(100,200,'star');
	star.inputEnabled = true;
	star.setInteractive();
	this.input.setDraggable(star);
	
	var star2 = this.add.image(300,200,'star');
	star2.inputEnabled = true;
	star2.setInteractive();
	this.input.setDraggable(star2);
	
	var star3 = this.add.image(150,200,'star');
	star3.inputEnabled = true;
	star3.setInteractive();
	this.input.setDraggable(star3);
	
	var star4 = this.add.image(350,200,'star');
	star4.inputEnabled = true;
	star4.setInteractive();
	this.input.setDraggable(star4);
	
	var star4 = this.add.image(400,200,'star');
	star4.inputEnabled = true;
	star4.setInteractive();
	this.input.setDraggable(star4);
	
	var car = this.add.image(100,100,'car');
	car.inputEnabled = true;
	car.setInteractive();
	this.input.setDraggable(car);
	
	var sonic = this.add.image(300,300,'sonic');
	sonic.inputEnabled = true;
	sonic.setInteractive();
	this.input.setDraggable(sonic);
	
	var health = this.add.image(350,300,'health');
	health.inputEnabled = true;
	health.setInteractive();
	this.input.setDraggable(health);
	
	this.input.on('drag', function(pointer, gameObject, dragX, dragY){
								gameObject.x = dragX; 
								gameObject.y = dragY;
								})
	
}

function update ()
{
}