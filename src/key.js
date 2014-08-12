/** @jsx React.DOM */

var React = require('react/addons');
var mouse = require('./mouse');
var Sound = require('./sound');

var Key = React.createClass({
	componentWillMount: function() {
		this.sound = new Sound();
	},
	startNote: function() {
		if (!this.props.on) return;
		this.setState({pressed: true});
		var minor = this.props.scale == 'minor';
		this.sound.start(this.props.tone);
	},
	handleMouseUp: function(e) {
		this.shifty = e.shiftKey;
		if (!this.shifty) {
			this.endNote();
		}
	},
	handleMouseLeave: function(e) {
		if (!this.shifty) {
			this.endNote();
		}
	},
	continueNote: function(e) {
		this.shifty = this.shifty || e.shiftKey;
		if (mouse.down) {
			this.startNote();
		}
	},
	endNote: function() {
		this.sound.stop();
		this.setState({pressed: false});
	},
	render: function() {
		var classes = React.addons.classSet({
			'key': true,
			'key-disabled': !this.props.on,
			'key-pressed': this.state && this.state.pressed,
			'key-minor': this.props.scale == 'minor',
			'key-major': this.props.scale == 'major'
		});
		return (<div style={this.props.style}
					 className={classes}
					 onMouseMove={this.continueNote}
					 onMouseDown={this.startNote}
					 onMouseUp={this.handleMouseUp}
					 onMouseLeave={this.handleMouseLeave} />);
	}
});

module.exports = Key;