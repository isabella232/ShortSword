function FPS() {
	this.lastLoop = new Date;
};

FPS.prototype = {
	filterStrength: 20,
	frameTime: 0,
	lastLoop: 0,
	thisLoop: 0,
	dirty: 0,
	fps: 0,
	
	update: function(){
		var thisFrameTime = (this.thisLoop = new Date) - this.lastLoop;
		this.frameTime += (thisFrameTime - this.frameTime) / this.filterStrength;
		this.lastLoop = this.thisLoop;
		this.fps = 1000 / this.frameTime;
		console.log(this.fps);
	},
	show: function() {
		console.log("SHOW");
	}
};

module.exports = new FPS();