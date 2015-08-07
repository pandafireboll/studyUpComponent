(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Speedtest start
var start  = +new Date();

	// Data Set
	var data = [
		{ id: 1, question:'Who is this?', answer:'Panda'},
		{ id: 2, question:'Why are you here?', answer:'To make that green'},
		{ id: 3, question:'What are you gonna do?', answer:'Keep coding!'}
	];

	//Main Component
	var StudyUpApp = React.createClass({displayName: "StudyUpApp",
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
					React.createElement("div", null, 
						React.createElement("h1", null, "Secret Files"), 
						React.createElement(Button, {localOnClick: this.handleClick}), 
                		 this.state.showResults ? React.createElement(StudyList, {data: this.props.data}) : null
					)
			)
		}
	});


	//Button Component
	var Button = React.createClass({displayName: "Button",
		render:function(){
			return (
					React.createElement("button", {onClick: this.props.localOnClick}, "Toggle")
			)
		}
	});

	//Individual Card
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

	//List of Questions
	var StudyList = React.createClass({displayName: "StudyList",
		render:function(){
					//Spits out each item in the array
					var interview = this.props.data.map(function(round){
						return React.createElement(Card, {id: round.id, question: round.question, answer: round.answer})
					});
					//Returns the entire data set
					return (
							React.createElement("div", null, 
								interview
							)
					)
		}
	});

	// renders out main component
	React.render(React.createElement(StudyUpApp, {data: data}), document.getElementById('content'))

//Speedtest end
var end = +new Date();
console.log(end - start + " ms");

},{}]},{},[1]);
