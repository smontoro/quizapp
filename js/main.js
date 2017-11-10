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
		//This stores the .main div in the main var
		var question = objShow[i].question
		var main = document.getElementById("main")
		var cardDiv = document.createElement("div")
		cardDiv.className = "card"
		cardDiv.className = "cardDiv"
		main.appendChild(cardDiv)
		var showImg = document.createElement("img")
		showImg.setAttribute("src", question)
		showImg.className = "showImg"
		cardDiv.appendChild(showImg)
		var inputAnswer = document.createElement("input")










		//This creates an img and stores it in the img var
		/*main.className = "card"
		var img = document.createElement("img")
		//This stores whatever question object is run through in the question var
		var question = objShow[i].question
		//this sets the src of the img element to the question image in the object
		img.setAttribute("src", question)
		//Gives the img an .imgClass
		img.className= "imgClass"
		//adds the img element the .main div
		main.appendChild(img)
		//creates an input element and stores it in the input var
		var input = document.createElement("input")
		//sets the input at
		input.setAttribute("id", "userInput")
		//
		main.appendChild(input)*/
	}




