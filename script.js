//your JS code here. If required.
document.getElementById("submit").addEventListener("click",() => {
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let checkbox = document.getElementById("checkbox");

	
	if(checkbox.checked) {
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value)
		alert(`Logged in as ${localStorage.getItem("username")}`)
	}else{
		
		localStorage.removeItem("username");
		localStorage.removeItem("password")
	}
	
})

if(localStorage.getItem("username") && localStorage.getItem("password")){
	document.getElementById("existing").style.display = "block"
}

function showAlert() {
	alert(`Logged in as ${localStorage.getItem("username")}`)
}

