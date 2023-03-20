function createQuote(event)
{
    let key = event.key;

    if(key === "Enter")
    {
        const inEl = document.querySelector("#quoteInput");
        localStorage.setItem("quote", inEl.value);

        window.location.href = "/index.html";
        return false;
    }
}