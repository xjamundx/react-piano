/** @jsx React.DOM */

var React = require('react/addons');

var Switch = React.createClass({
	getInitialState: function() {
		return {on: false};
	},
	handleClick: function() {
		this.props.onChange(!this.state.on);
		this.setState({on: !this.state.on});
	},
	render: function() {
		var classes = React.addons.classSet({
			'switch': true,
			'switch-on': this.state.on,
			'switch-off': !this.state.on
		});
		return <div className={classes} onClick={this.handleClick}></div>;
	}
});

module.exports = Switch;