var objShow= [	
	{
		question: "img/question0.jpg",
		answer:"Good Times"
	},

	{
		question: "img/question1.jpg",
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

	for (var i = 0; i < objShow.length; i++) {
		var main = document.getElementById("main")
		var img = document.createElement("img")
		var question = objShow[i].question
		img.setAttribute("src", question)
		img.className= "imgClass"
		main.appendChild(img)
		var input = document.createElement("input")
		input.setAttribute("id", "userInput")
		main.appendChild(input)
	}




