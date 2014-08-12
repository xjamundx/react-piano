/** @jsx React.DOM */

var React = require('react');
var Key = require('./key');
var Switch = require('./switch');

// constants
var SCALE = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
var OCTAVES = 3;
var START_TONE = 50;

function generateKeys(on) {
	var keys = [];
	var tone = 0;
	var i = 1;
	for (i; i <= OCTAVES; i++) {
		tone = START_TONE * Math.pow(2, i);
		keys = keys.concat(SCALE.map(function(key) {
			var scale = key.length > 1 ? "minor" : "major";
			tone += scale === "major" ? 20 : 10;
			return <Key scale={scale} on={on} tone={tone} />;
		}));
	}
	return keys;
}

var Piano = React.createClass({
	getInitialState: function() {
		return {keys: generateKeys(false)};
	},
	onToggle: function(on) {
		this.setState({keys: generateKeys(on)});
	},
	render: function() {
		return <div className={'piano'}>{this.state.keys}<Switch onChange={this.onToggle} /></div>;
	}
});

module.exports =  Piano;