/** @jsx React.DOM */

var React = require('react/addons');
var mouse = require('./mouse');

var KEY_PRESS_LENGTH = 250;

var Key = React.createClass({
	timeoutID: 0,
	getInitialState: function() {
		return {pressed: false};
	},
	clearTimeout: function() {
		clearTimeout(this.timeoutID);
	},
	startNote: function() {
		this.clearTimeout();
		this.setState({pressed: true});
		var key = this.props.key;
		var minor = this.props.scale == 'minor';
		console.log(minor ? key.toLowerCase() : key.toUpperCase());
	},
	continueNote: function() {
		if (mouse.down) {
			this.startNote();
		}
	},
	endNote: function() {
		this.timeoutID = setTimeout(function() {
			this.setState({pressed: false});
		}.bind(this), KEY_PRESS_LENGTH);
	},
	render: function() {
		var classes = React.addons.classSet({
			'key': true,
			'key-pressed': this.state.pressed,
			'key-minor': this.props.scale == 'minor'
		});
		return (<div style={this.props.style}
					 className={classes}
					 onMouseMove={this.continueNote}
					 onMouseDown={this.startNote}
					 onMouseUp={this.endNote}
					 onMouseLeave={this.endNote} />);
	}
});

module.exports = Key;