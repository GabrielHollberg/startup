function isOnlyWhiteSpace(s)
{
    return !s.trim().length;
}

async function loadGoals()
{
    let goals = [];
    try
    {
        const response = await fetch('/api/goals');
        goals = await response.json();

        localStorage.setItem('goals', JSON.stringify(goals));
    }
    catch
    {
        const goalsText = localStorage.getItem('goals');
        if(goalsText)
        {
            goals = JSON.parse(goalsText);
        }
    }

    displayGoals(goals);
}

function displayGoals(goals)
{
    const El = document.querySelector('#monthlyGoals');
  
    if (goals.length)
    {
        // Update the DOM with the scores
        for (const [i, goal] of goals.entries())
        {
            const childEl = document.createElement('div');
            const childEl2 = document.createElement('p');

            childEl.classList.add("checkDiv");

            childEl2.style.fontSize = "1.5em";
            childEl2.textContent = i;

            El.appendChild(childEl);
            childEl.appendChild(childEl2);
        }
    }
}

function createMonthly()
{
    const myElement = document.querySelector("#monthlyGoals");
    const myInput = document.querySelector("#goalInput");

    if(myInput.value !== "" && (isOnlyWhiteSpace(myInput.value) == false))
    {
        const childElement = document.createElement("div");
        //const childElement2 = document.createElement("input");
        const childElement3 = document.createElement("p");

        childElement.classList.add("checkDiv");

        //childElement2.type = "checkbox";
        //childElement2.classList.add("checkInput");

        childElement3.style.fontSize = "1.5em";
        childElement3.innerText = myInput.value;
        myInput.value = "";

        childElement.onclick = function() {if(this.style.textDecoration === "line-through"){this.style.textDecoration = "none"}else{this.style.textDecoration = "line-through"};}
        myElement.appendChild(childElement);
        //childElement.appendChild(childElement2);
        childElement.appendChild(childElement3);
    }
}

function createWeekly()
{
    const myElement = document.querySelector("#weeklyGoals");
    const myInput = document.querySelector("#goalInput");

    if(myInput.value !== "" && (isOnlyWhiteSpace(myInput.value) == false))
    {
        const childElement = document.createElement("div");
        //const childElement2 = document.createElement("input");
        const childElement3 = document.createElement("p");

        childElement.classList.add("checkDiv");

        //childElement2.type = "checkbox";
        //childElement2.classList.add("checkInput");

        childElement3.style.fontSize = "1.5em";
        childElement3.innerText = myInput.value;
        myInput.value = "";

        childElement.onclick = function() {if(this.style.textDecoration === "line-through"){this.style.textDecoration = "none"}else{this.style.textDecoration = "line-through"};}
        myElement.appendChild(childElement);
        //childElement.appendChild(childElement2);
        childElement.appendChild(childElement3);
    }
}

function createDaily()
{
    const myElement = document.querySelector("#dailyGoals");
    const myInput = document.querySelector("#goalInput");

    if(myInput.value !== "" && (isOnlyWhiteSpace(myInput.value) == false))
    {
        const childElement = document.createElement("div");
        //const childElement2 = document.createElement("input");
        const childElement3 = document.createElement("p");

        childElement.classList.add("checkDiv");

        //childElement2.type = "checkbox";
        //childElement2.classList.add("checkInput");

        childElement3.style.fontSize = "1.5em";
        childElement3.innerText = myInput.value;
        myInput.value = "";

        childElement.onclick = function() {if(this.style.textDecoration === "line-through"){this.style.textDecoration = "none"}else{this.style.textDecoration = "line-through"};}
        myElement.appendChild(childElement);
        //childElement.appendChild(childElement2);
        childElement.appendChild(childElement3);
    }
}

loadGoals();