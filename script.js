//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("username")?.trim() && localStorage.getItem("password")?.trim()) {
        document.getElementById("existing").style.display = "block";
    }
});

document.getElementById("submit").addEventListener("click",() => {
	let username = document.getElementById("username").value.trim();
	let password = document.getElementById("password").value.trim();
	let checkbox = document.getElementById("checkbox");

	
	if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert(`Logged in as ${username}`);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }


	// Check and show existing login button
    if (localStorage.getItem("username")?.trim() && localStorage.getItem("password")?.trim()) {
        document.getElementById("existing").style.display = "block";
    } else {
        document.getElementById("existing").style.display = "none";
    }
	
})

function showAlert() {
	alert(`Logged in as ${localStorage.getItem("username")}`)
}

