var context = new webkitAudioContext();

var keys = {
	A: 2000,
	a: 1750,
	B: 1500,
	A: 2000,
	C: 1500,
	c: 1250,
	D: 1500,
	d: 1000,
	E: 1500,
	e: 750,
	F: 1500,
	f: 650,
	G: 1500,
	g: 800
};

function getFrequency(key) {
	return keys[key] || 0;
}

module.exports = function(tone, delay) {
	console.log(tone);

	var oscillator = context.createOscillator();
	oscillator.type = 0; // sine wave
	oscillator.frequency.value = tone; // getFrequency(key);
	oscillator.connect(context.destination);
	oscillator.noteOn && oscillator.noteOn(0);

	setTimeout(function() {
		oscillator.stop();
	}, delay);
}