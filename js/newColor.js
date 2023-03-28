function createColor(color, colortwo)
{
    const r = document.querySelector(":root");
    r.style.setProperty("--primary", color);
    r.style.setProperty("--fourth", colortwo);
    
    localStorage.setItem("color", color);
    localStorage.setItem("colortwo", colortwo);
}