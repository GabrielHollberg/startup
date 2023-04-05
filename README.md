# startup
Web Programming Repository

I learned how to clone, fork, commit, push, and pull a repository using git and github

I also learned that two changes on the same line that haven't been pushed to github will create a conflict; the conflict can be resolved by merging the files

Elevator Pitch -
I want to create a website to help people better manage their life. They will have the ability to create goals and plans, as well as to keep track of their schedule and track their progress. I don't want to target a specific aspect of life like a nutrition or workout progress tracker, instead I want to help people in every aspect of their lives. The website will have a simple layout and will be easy to use. No need to complicate things.

Key Features -

Navigation bar -
My Profile, My Goals, My Schedule, My Todo List, My Notes

My Profile -
Profile Picture, Username, Bio

My Goals -
Past Goals, Current Goals

My Schedule -
Daily, Weekly, Monthly

My Todo List -
Simple todo list

My Notes -
Simple notes page

Rough Sketch of Website -
[Note Feb 6, 2023.pdf](https://github.com/GabrielHollberg/startup/files/10671930/Note.Feb.6.2023.pdf)

Simon html -
While working on the simon html project I learned a few cool things. One is that when you use an a tag you should use it on the inside of formatting tags. I did it on the outside at first and it made an entire line on my website a hyperlink. I also learned more about the form tag. It will be interesting to learn more about css after using some of html's outdated formatting tools.

CSS -
Animation in CSS is actually super cool. Remember use @keyframes to define states at different percentages of the animation. then use animation in css with whatever you used for your keyframes name and an amount of time like 2s

Responsive Design -
Always include this meta tag in the html head tag
<meta name="viewport" content="width=device-width, initial-scale=1.0">
This will prevent automatic browser scaling on devices

Simon css -
While working on the simon css project I learned how to use the bootstrap framework. This framework is included in a link tag and uses classes to style a webpage. I also learned a little about w3.css and think I like it even better than bootstrap.

Simon JS -
While looking over the Simon Javascript project I learned a lot. One of the things I learned was that you can use localStorage to save a string entered by a user. I will be using this on my Startup project. I also learned about using Javascript functions in my html with events like onclick.

Startup JS -
While working on the Javascript portion of my Startup project I learned a ton!! One thing I learned is how to manipulate the DOM. I had learned a little about this before, but as I worked on this project I came to understand it much better. I also learned how to make an html element disappear when you click on it. One other thing I thought was really cool was the localStorage keyword. As I researched I learned that it should only be used for non-sensitive information, but I still thought it was a useful concept for small page changes that should be kept on a specific user's page.

Simon Service -
One of the important things I learned while working with the web services portion of the Simon project is that the static html, css, and js files should be moved to the public directory. While I don't understand some of the index.js code, I think it will be important to remember that this line

app.use(express.static('public'));

tells my express web service to use those files. I also gained a little more experience with using api's to use other resources to retrieve things like a random quote or picture

function displayPicture() {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;

      const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', imgUrl);
      containerEl.appendChild(imgEl);
    });
}

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

Simon DB -
I learned a ton while setting up a database on Mongo Atlas and cloning Simon DB. One of the most important things I learned was how to set and access environment variables on linux. It makes sense that this will protect my information. I also learned to add things to a database with node.js. I am curious if there is a way to store user data so I cannot see it though.

Simon Login -
While working with the Simon Login portion of the Simon project I learned about cookies. I wasn't sure what the difference between cookies and localStorage was before, but now I know that cookies provide a secure way of storing data. Cookies are useful for important information like whether or not the user is logged in. LocalStorage is useful for less important things. I also learned more about javascript and how it can be used to connect multiple web services.
