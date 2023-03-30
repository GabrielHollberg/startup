function createMonthly()
{
    const myElement = document.querySelector("#weeklyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");

    childElement.innerText = myInput.value;
    childElement.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
}

function createWeekly()
{
    const myElement = document.querySelector("#weeklyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");

    childElement.innerText = myInput.value;
    childElement.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
}

function createDaily()
{
    const myElement = document.querySelector("#dailyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");

    childElement.innerText = myInput.value;
    childElement.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
}