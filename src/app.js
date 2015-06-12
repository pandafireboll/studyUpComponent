// Dummy Data
	var data = [
		{ id: 1, question:'Who is this?', answer:'Panda'},
		{ id: 2, question:'Why are you here?', answer:'To make that green'},
		{ id: 3, question:'What are you gonna do?', answer:'Keep coding!'}
	];

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

	React.render(<StudyUpApp data={data} />, document.getElementById('content'))