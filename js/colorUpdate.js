const r = document.querySelector(":root");
const color = localStorage.getItem("color") ?? "black";
const colortwo = localStorage.getItem("colortwo") ?? "lightgray";

r.style.setProperty("--primary", color);
r.style.setProperty("--fourth", colortwo);