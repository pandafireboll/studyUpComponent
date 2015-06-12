var React = require('react');

var Card = React.createClass({
		render:function(){
			return (
					<div>
						<div>{this.props.id}</div>
						<h3>{this.props.question}</h3>
						<p>{this.props.answer}</p>
					</div>
				)
		}
});

module.exports = Card;