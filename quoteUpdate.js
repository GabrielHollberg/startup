const myQuote = localStorage.getItem("quote") ?? "Do or do not, there is no try";

document.querySelector("#quote").innerText = myQuote;