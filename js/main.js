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

	for (var i = 0; i < objShow.length; i++) {
		//This stores the .main div in the main vaR
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
		showImg.className = ("img-fluid")
		col5Div.appendChild(showImg)
		rowDiv.appendChild(col5Div)
		var col4Div = document.createElement("div")
		col4Div.className = "col-lg-4 mt-5"
		var answerInput = document.createElement("input")
		answerInput.className = "text-center"
		answerInput.setAttribute("placeholder", "Your Answer Here")
		col4Div.appendChild(answerInput)
		rowDiv.appendChild(col4Div)

	}




