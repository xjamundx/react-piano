var mouse = {
	down: false,
	up: false
};

window.addEventListener('mousedown', function() {
	mouse.up = false;
	mouse.down = true;
})

window.addEventListener('mouseup', function() {
	mouse.up = true;
	mouse.down = false;
})

module.exports = mouse;