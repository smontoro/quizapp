var questions = [	
	{
		question:"img/question0.jpg",
		answer:"Good Times"
	},

	{	
		question:"img/question1.jpg",
		answer:"Happy Days"
	},

	{  
		question: "img/question2.jpg",
		answer:"Laverne and Shirley"
	},
	
	{	
		question: "img/question3.jpg",
		answer:"Sanford and Son"
	},

	{
		question: "img/question4.jpg",
		answer:"Taxi"
	},

	{
		question: "img/question5.jpg",
		answer:"Three's Company"
	}
]

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	var img = document.createElement("img")
	img.setAttribute("src", questions[i].question)
	img.className = "img-fluid"

	el.appendChild(img)
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;

}







