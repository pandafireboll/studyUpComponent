var React = require('react'),
	StudyList = require('./StudyList'),
	Card = require('./Card');

var StudyUpApp = React.createClass({
		incrementId: function() {
			this.setState({
				id: this.state.id + 1
			});
		},
		getInitialState: function() {
        	return { showResults: false, id: 1 };
    	},
    	onClick: function() {
        	this.setState({ showResults: true});
    	},
		render:function(){
			return (
					<div>
						<h1>Tech Questions</h1>
						<input type="submit" value="Next" onClick={this.onClick} />
                		{ this.state.showResults ? <StudyList data={this.props.data} /> : null }
					</div>
				)
		}
});

module.exports = StudyUpApp;