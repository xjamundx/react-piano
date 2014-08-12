var context = new webkitAudioContext();

var Sound = module.exports = function Sound() {
	this.started = false;
};

Sound.prototype.start = function(tone) {
	if (this.started) return;

	console.log(tone);
	this.engine = context.createOscillator();
	this.engine.type = 0; // sine wave
	this.frequency = tone;
	this.engine.frequency.value = tone;
	this.engine.connect(context.destination);
	this.engine.start();

	this.started = true;
};

Sound.prototype.stop = function() {
	if (!this.started) return;
	this.engine.stop();
	this.started = false;
};