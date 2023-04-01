const myUsername = localStorage.getItem("username") ?? "username";

document.querySelector("#username").innerText = myUsername;