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
		cardDiv.className = "card, col-6"
		main.appendChild(cardDiv)
		var ol = document.createElement("ol")
		cardDiv.appendChild(ol)
		var li = document.createElement("li")
		ol.appendChild(li)
		var showImg = document.createElement("img")
		showImg.setAttribute("src", question)
		showImg.className = "showImg, card-img-top"
		li.appendChild(showImg)
		/*var cardBodyDiv = document.createElement("div")
		cardBodyDiv.className = "card-body"
		cardDiv.appendChild(cardBodyDiv)
		var showImg = document.createElement("img")
		showImg.setAttribute("src", question)
		showImg.className = "showImg, card-img-top"
		cardBodyDiv.appendChild(showImg)
		var inputAnswer = document.createElement("input")
		cardBodyDiv.appendChild(inputAnswer)*/

	}




