"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};


Scene.start = function () {
	// Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
	// Seup the parrot to be displayed.
    Scene.sprite = numbers;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
	
	// Wait till the parrot image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
	}
};

Scene.start2 = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[0].frame.x-1,Scene.sprite.frames[0].frame.y,Scene.sprite.frames[0].frame.w,Scene.sprite.frames[0].frame.h -20,70,0,70,130);
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[1].frame.x -10 ,Scene.sprite.frames[1].frame.y,Scene.sprite.frames[1].frame.w,Scene.sprite.frames[1].frame.h - 20,0,0,70,130);
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 500);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = 138;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset=100;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
};



//FIX BUTTON TO start process.
	let btn = document.createElement("button");
	btn.innerHTML = "Click Me";
	btn.onclick = function () {
		Scene.sprite.frame++;
	  };
	  
Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,0,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);
	//document.body.appendChild(btn)

	if(Scene.sprite.frame == 0){

	}else if (Scene.sprite.frame !=10){
		// Advance to the next frame.
		Scene.sprite.frame++;

		// At the end of the sprite sheet, displays 10.
	}else if(Scene.sprite.frame == 10){
		Scene.update();
		Scene.start2();
	}
	

	
	

	
	

	
};



