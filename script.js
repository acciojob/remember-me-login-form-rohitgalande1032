//your JS code here. If required.
document.getElementById("submit").addEventListener("click",() => {
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let checkbox = document.getElementById("checkbox");

	
	if(checkbox.checked) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value)
	}else{
		alert(`Logged in as ${localStorage.getItem("username")}`)
		localStorage.removeItem("username");
		localStorage.removeItem("password")
	}
	
})

if(localStorage.getItem("username") && localStorage.getItem("password")){
	document.getElementById("form").innerHTML += `
		<button onclick="showAlert()" type="submit" id="existing">Login as existing user.</button>
	`
}

function showAlert() {
	alert(`Logged in as ${localStorage.getItem("username")}`)
}

