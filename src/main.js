/** @jsx React.DOM */

var React = require('react');
var Piano = require('./piano');

React.renderComponent(
	<Piano />,
	document.getElementById('body')
);
