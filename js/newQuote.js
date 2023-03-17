function createQuote(event)
{
    let key = event.key;

    if(key === "Enter")
    {
        const inEl = document.querySelector("#quoteInput");
        localStorage.setItem("quote", inEl.value);
    }
}