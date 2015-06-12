// Dummy Data
	var data = [
		{ id: 1, question:'Who is this?', answer:'Panda'},
		{ id: 2, question:'Why are you here?', answer:'To make that green'},
		{ id: 3, question:'What are you gonna do?', answer:'Keep coding!'}
	];

	var StudyUpApp = React.createClass({displayName: "StudyUpApp",
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
					React.createElement("div", null, 
						React.createElement("h1", null, "Tech Questions"), 
						React.createElement("input", {type: "submit", value: "Next", onClick: this.onClick}), 
                		 this.state.showResults ? React.createElement(StudyList, {data: this.props.data}) : null
					)
				)
		}
	});

	var Card = React.createClass({displayName: "Card",
		render:function(){
			return (
					React.createElement("div", null, 
						React.createElement("div", null, this.props.id), 
						React.createElement("h3", null, this.props.question), 
						React.createElement("p", null, this.props.answer)
					)
				)
		}
	});

	var StudyList = React.createClass({displayName: "StudyList",
		render:function(){
					var interview = this.props.data.map(function(round){
						return React.createElement(Card, {id: round.id, question: round.question, answer: round.answer})
					});
					return (
							React.createElement("div", null, 
								interview
							)
						)
		}
	});

	React.render(React.createElement(StudyUpApp, {data: data}), document.getElementById('content'))