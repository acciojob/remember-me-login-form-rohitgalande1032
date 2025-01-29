//your JS code here. If required.
document.getElementById("submit").addEventListener("click",() => {
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let checkbox = document.getElementById("checkbox");

	
	if(checkbox.checked) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value)
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password")
		alert("Logged in as.")
	}
	
})

if(localStorage.getItem("username") && localStorage.getItem("password")){
	document.getElementById("form").innerHTML += `
		<input onclick="showAlert()" type="submit" id="existing" value="Login as existing user.">
	`
}

function showAlert() {
	alert("Logged in as.")
}

