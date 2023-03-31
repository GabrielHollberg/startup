const r = document.querySelector(":root");
const color = localStorage.getItem("color") ?? "rgba(0, 0, 0, 0.8)";

r.style.setProperty("--primary", color);