var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

// Create game
var game = new Phaser.Game(config);

// Declare Score
var score = 0;
var scoreText;

//Declare Health
var hitPoints = 3;
var hitPointsString = "HP: ";
var hitPointsText;

function preload() {
	this.load.image("sky","https://examples.phaser.io/assets/skies/chrome.png");
	this.load.image("ground","https://phaser.io/content/tutorials/making-your-first-phaser-3-game/platform.png");
	this.load.image("star", "https://examples.phaser.io/assets/particlestorm/heart.png");
	this.load.image("bomb", "https://examples.phaser.io/assets/particlestorm/particles/bomb.png");
	this.load.image("menu", "https://examples.phaser.io/assets/demoscene/monitor.png");
	this.load.spritesheet("dude","https://phaser.io/content/tutorials/making-your-first-phaser-3-game/dude.png",
		{ frameWidth: 32, frameHeight: 48 });
	this.load.audio('hitAudio', 'https://examples.phaser.io/assets/audio/SoundEffects/blaster.mp3');
	this.load.audio('startAudio', 'https://examples.phaser.io/assets/audio/tommy_in_goa.mp3');
	this.load.audio('endAudio','https://examples.phaser.io/assets/audio/Totta-HeroQuest-Pophousedub-remix.mp3');
	
	// load the webfont library
	this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
}

function create() {
	var ground = this.add.image(0, 0, "sky").setOrigin(0, 0);

	// Add platforms & ground
	platforms = this.physics.add.staticGroup();
	platforms.create(400, 568, "ground").setScale(2).refreshBody();
	platforms.create(600, 400, "ground");
	platforms.create(50, 250, "ground");
	platforms.create(750, 220, "ground");

	// Create our player
	player = this.physics.add.sprite(100, 450, "dude");
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);
	player.body.setGravityY(300);
	this.physics.add.collider(player, platforms);


	//Animations from spritsheet.
	this.anims.create({
		key: "left",
		frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: "turn",
		frames: [{ key: "dude", frame: 4 }],
		frameRate: 20
	});

	this.anims.create({
		key: "right",
		frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
		frameRate: 10,
		repeat: -1
	});

	// Add keyboard input
	cursors = this.input.keyboard.createCursorKeys();

	//Adding randomized star to collect.
	var ch = Phaser.Math.Between(100, 800);
	var ch3 = Phaser.Math.Between(400, 800);
	stars = this.physics.add.group({
		key: "star",
		repeat: 0,
		setXY: { x: ch, y: 20, stepX: 70 }
	});
	this.physics.add.collider(stars, platforms);
	this.physics.add.overlap(player, stars, collectStar, null, this)



	var add = this.add;
	
	// Scoring: Load Google Web Font/s
	WebFont.load({
		google: {
			families: [ 'Bangers' ]
		},
		active: function ()
		{
			// Adding Text that will be displayed on game.
			scoreText = add.text(16, 16, 'score: 0  ', { fontFamily: 'Bangers', fontSize: '32px', fill: '#000' });
			sT = add.text(600, 16, 'Press H for help', { fontFamily: 'Bangers', fontSize: '32px', fill: '#000' });
			introText= add.text(16,16,"Game Over! Rerun to play again.",{ fontFamily: 'Bangers', fontSize: '32px', fill: '#000' });
			nb = add.text(530, 16, 'Press N for new game', { fontFamily: 'Bangers', fontSize: '32px', fill: '#000' });
			introText.visible = false;
			nb.visible = false;
		}
	});

	
	// Add bombs and colliders with platforms and player
	bombs = this.physics.add.group();
	this.physics.add.collider(bombs, platforms);
	this.physics.add.collider(player, bombs, hitBomb, null, this);
	
	var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
	var bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
	
	//Hitpoints that refresh.
	hitPointsText = this.add.text(32, 64, hitPointsString + hitPoints);


	//MENU
	var menu = this.add.image(400,250,'menu')
	menu.visible = false;
	//Need to create a function if h is pressed the menu becomes visible.
}

function update() {
	// Keyboard control of player:
	if (cursors.left.isDown) {
		player.setVelocityX(-160);

		player.anims.play("left", true);
	} else if (cursors.right.isDown) {
		player.setVelocityX(160);

		player.anims.play("right", true);
	} else {
		player.setVelocityX(0);

		player.anims.play("turn");
	}

	// jump mechanic
	if (cursors.up.isDown && player.body.touching.down) {
		player.setVelocityY(-475);
	}
	hitPointsText.setText(hitPointsString + hitPoints);
}

function collectStar(player, star) {
	star.disableBody(true, true);
	
	// Add 10 points to score and update the screen
	score += 10;
	scoreText.setText('Score: ' + score + ' ');


	// If star is collected it will regenerate somewhere else.
	var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
	var y = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
	if (stars.countActive(true) === 0)
  {
	stars = this.physics.add.group({
		key: "star",
		repeat: 0,
		setXY: { x: x, y: 20, stepX: 70 }
	});
	this.physics.add.collider(stars, platforms);
	this.physics.add.overlap(player, stars, collectStar, null, this);
	}
}

//When player hits the bomb three times game will end.
function hitBomb (player, bomb)
{
	hitPoints--;
	if(hitPoints == 0){
		this.physics.pause();
		finishedGame = true;
		player.visible = false;
		hitPointsText.visible = false;
		sT.visible = false;
		introText.visible = true;
		nb.visible = true;
		scoreText.visible = false;
		hitPointsText.visible = false;
	}
    player.anims.play('turn');
}
