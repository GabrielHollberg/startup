createQuote()
{
    const inEl = document.querySelector("#quoteInput");
    localStorage.setItem("quote", inEl.value);
    window.location.href = "index.html";
}