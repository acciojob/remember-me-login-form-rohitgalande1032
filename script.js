//your JS code here. If required.
document.getElementById("submit").addEventListener("click",() => {
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let checkbox = document.getElementById("checkbox");

	
	let userObj = {Username: username.value, Password: password.value}
	console.log(userObj)
	if(checkbox.checked) {
		localStorage.setItem("userObj", JSON.stringify(userObj))
	}else{
		localStorage.removeItem("userObj");
		alert("Logged in as.")
	}
	
})

if(localStorage.getItem("userObj")){
	document.getElementById("form").innerHTML += `
		<input onclick="showAlert()" type="submit" id="existing" value="Login as existing user.">
	`
}

function showAlert() {
	alert("Logged in as.")
}

