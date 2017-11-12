var objShow= [	
	{	number: "1.",
		questionImg:"img/question0.jpg",
		answer:"Good Times"
	},

	{	number: "2.",
		questionImg:"img/question1.jpg",
		answer:"Happy Days"
	},

	{   number: "3.",
		questionImg: "img/question2.jpg",
		answer:"Laverne and Shirley"
	},
	
	{	
		number: "4.",
		questionImg: "img/question3.jpg",
		answer:"Sanford and Son"
	},

	{
		number: "5.",
		questionImg: "img/question4.jpg",
		answer:"Taxi"
	},

	{
		number: "6.",
		questionImg: "img/question5.jpg",
		answer:"Three's Company"
	}
]

	//creates Q&A section
	for (var i = 0; i < objShow.length; i++) {
		//This stores the .main div in the main var
		var main = document.getElementById("main")

		var contentDiv = document.createElement("div")
		contentDiv.className = "mt-5 container"
		main.appendChild(contentDiv)

		var rowDiv = document.createElement("div")
		rowDiv.className = "row"
		contentDiv.appendChild(rowDiv)

		var col5Div = document.createElement("div")
		col5Div.className = "col-lg-5"
		var showImg = document.createElement("img")
		showImg.setAttribute("src", objShow[i].questionImg)
		showImg.setAttribute("id", "showImg")
		showImg.className = ("img-fluid")
		col5Div.appendChild(showImg)
		rowDiv.appendChild(col5Div)

		var col4Div = document.createElement("div")
		col4Div.className = "col-lg-4 mt-5"
		var answerInput = document.createElement("input")
		answerInput.className = "text-center"
		answerInput.setAttribute("placeholder", "Your Answer Here")
		answerInput.setAttribute("id", "answerInput")
		col4Div.appendChild(answerInput)
		rowDiv.appendChild(col4Div)

	
	}



	//checks results when button is clicked to submit quiz
	function resultsFunction() {
		// store variables to update correct and incorrect totals
		var correct = 0;
		var incorrect = 0;

		//loop through objects
		for(var i = 0; i < objShow.length; i++) {
			//stores each correct answer
			var answer = objShow[i].answer 
			// store each user answer
			var guess = document.getElementById("answerInput").value
			// store element to add a class if correct or incorrect
			var questionSpot = document.getElementById("showImg")
	}

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
		}
	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}		

	







