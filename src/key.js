/** @jsx React.DOM */

var React = require('react/addons');

var KEY_PRESS_LENGTH = 250;

var Key = React.createClass({
	getInitialState: function() {
		return {pressed: false};
	},
	startNote: function(event) {
		this.setState({pressed: true});
		var key = this.props.key;
		var minor = this.props.scale == 'minor';
		console.log(minor ? key.toLowerCase() : key.toUpperCase());
	},
	endNote: function() {
		setTimeout(function() {
			this.setState({pressed: false});
		}.bind(this), KEY_PRESS_LENGTH);
	},
	render: function() {
		var classes = React.addons.classSet({
			'key': true,
			'key-pressed': this.state.pressed,
			'key-minor': this.props.scale == 'minor'
		});
		return <div style={this.props.style} className={classes} onMouseDown={this.startNote} onMouseUp={this.endNote} onMouseLeave={this.endNote} />;
	}
});

module.exports = Key;