/** @jsx React.DOM */

var React = require('react');
var Key = require('./key');
var Switch = require('./switch');

var Piano = React.createClass({
	render: function() {
		var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c'];
		var keys = {};
		var x = 75;
		letters.forEach(function(letter, i) {
			var leftness = {left: x + i * 41};
			keys[letter + "-" + i] = <Key key={letter} tone={500 + i * 45} />;
			if (i < letters.length - 1) {
				keys[letter + "-" + i + '-minor'] = <Key style={leftness} key={letter} scale='minor' />;
			}
		});
		return (<div className={'piano'} >
			<Switch />
			{keys}
		</div>);
	}
});

module.exports =  Piano;