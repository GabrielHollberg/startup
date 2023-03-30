function createMonthly()
{
    const myElement = document.querySelector("#monthlyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");
    //const childElement2 = document.createElement("input");
    const childElement3 = document.createElement("p");

    childElement.classList.add("checkDiv");

    //childElement2.type = "checkbox";
    //childElement2.classList.add("checkInput");

    childElement3.innerText = myInput.value;

    childElement3.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
    //childElement.appendChild(childElement2);
    childElement.appendChild(childElement3);
}

function createWeekly()
{
    const myElement = document.querySelector("#weeklyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");
    //const childElement2 = document.createElement("input");
    const childElement3 = document.createElement("p");

    childElement.classList.add("checkDiv");

    //childElement2.type = "checkbox";
    //childElement2.classList.add("checkInput");

    childElement3.innerText = myInput.value;

    childElement3.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
    //childElement.appendChild(childElement2);
    childElement.appendChild(childElement3);
}

function createDaily()
{
    const myElement = document.querySelector("#dailyGoals");
    const myInput = document.querySelector("#goalInput");
    const childElement = document.createElement("div");
    //const childElement2 = document.createElement("input");
    const childElement3 = document.createElement("p");

    childElement.classList.add("checkDiv");

    //childElement2.type = "checkbox";
    //childElement2.classList.add("checkInput");

    childElement3.innerText = myInput.value;

    childElement3.onclick = function() {this.remove();}
    myElement.appendChild(childElement);
    //childElement.appendChild(childElement2);
    childElement.appendChild(childElement3);
}