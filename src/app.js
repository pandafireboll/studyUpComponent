// Speedtest start
var start  = +new Date();

	// Data Set
	var data = [
		{ id: 1, question:'Who is this?', answer:'Panda'},
		{ id: 2, question:'Why are you here?', answer:'To make that green'},
		{ id: 3, question:'What are you gonna do?', answer:'Keep coding!'}
	];

	//Main Component
	var StudyUpApp = React.createClass({
		incrementId: function() {
			this.setState({
				id: this.state.id + 1
			});
		},
		//initial state
		getInitialState: function() {
        	return { showResults: false, id: 1 };
    	},
    	//click event
    	handleClick: function() {
        	this.setState({ showResults: !this.state.showResults });
    	},
    	//render return
		render:function(){
			return (
					<div>
						<h1>Secret Files</h1>
						<Button localOnClick={this.handleClick} />
                		{ this.state.showResults ? <StudyList data={this.props.data} /> : null }
					</div>
			)
		}
	});


	//Button Component
	var Button = React.createClass({
		render:function(){
			return (
					<button onClick={this.props.localOnClick}>Toggle</button>
			)
		}
	});

	//Individual Card
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

	//List of Questions
	var StudyList = React.createClass({
		render:function(){
					//Spits out each item in the array
					var interview = this.props.data.map(function(round){
						return <Card id={round.id} question={round.question} answer={round.answer} />
					});
					//Returns the entire data set
					return (
							<div>
								{interview}
							</div>
					)
		}
	});

	// renders out main component
	React.render(<StudyUpApp data={data} />, document.getElementById('content'))

//Speedtest end
var end = +new Date();
console.log(end - start + " ms");