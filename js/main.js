1. Eddie
2. Chachi






var objPeople = [
	
	{
		username:"sam",
		password:"password25"
	},

	{
		username:"matt",
		password:"password88"
	},

	{
		username:"chris",
		password:"password3"
	}
]

 function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById("password").value

	for(i=0; i<objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!")
			return
		}
	}
	alert("incorrect username or password")
}

function register(){
	var newUsername = document.getElementById("newUsername").value
	var newPassword = document.getElementById("newPassword").value
	var newUser = {
		username: newUsername,
		password: newPassword
	}

	for(i=0; i<objPeople.length; i++) {
		if(newUsername == objPeople[i].username) {
			alert("that username is already taken")
			return
		} else if (newPassword.length < 8) {
			alert("that password is too short")
			return
		}

	}

		objPeople.push(newUser)
console.log(objPeople)
}












