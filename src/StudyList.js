var React = require('react'),
	Card = require('./Card');

var StudyList = React.createClass({
		render:function(){
					var interview = this.props.data.map(function(round){
						return <Card id={round.id} question={round.question} answer={round.answer} />
					});
					return (
							<div>
								{interview}
							</div>
						)
		}
});

module.exports = StudyList;