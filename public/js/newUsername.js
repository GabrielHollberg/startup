function createUsername(event)
{
    let key = event.key;

    if(key === "Enter")
    {
        const inEl = document.querySelector("#usernameInput");
        localStorage.setItem("username", inEl.value);

        window.location.href = "/html/profile.html";
        return false;
    }
}