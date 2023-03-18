function createColor(color)
{
    const r = document.querySelector(":root");
    r.style.setProperty("--primary", color);
    
    localStorage.setItem("color", color);
}