// Dummy Data
	var data = [
		{ id: 1, question:'Who is this?', answer:'Panda'},
		{ id: 2, question:'Why are you here?', answer:'To make that green'},
		{ id: 3, question:'What are you gonna do?', answer:'Keep coding!'}
	];

	var React = require('react'),
		StudyUpApp = require('./StudyUpApp');

	React.render(<StudyUpApp data={data} />, document.getElementById('content'))