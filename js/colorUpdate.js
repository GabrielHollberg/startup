const r = document.querySelector(":root");
const color = localStorage.getItem("color") ?? "black";

r.style.setProperty("--primary", color);