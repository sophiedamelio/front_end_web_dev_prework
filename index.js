// index.js



// var number = 5;
// let herName = "Sophie ";

// number = 12;
// herName = "Pluralsight ";

// document.writeln(herName + number);
// alert("hello World");

const formInfo = document.getElementById("formInfo");
const experiences = document.getElementsByClassName("experience");


let hasJob = false;

if (hasJob) {
    showMessage("Thanks for visiting, I'm currently employed");
} else {
    showMessage("Please look around, I am looking for a job");
}

let today = new Date();
let dayOfWeek = today.getDay(); // stored as numbers (0 is sunday)

if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my return time.");
}



function showMessage(message) {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage(){
    formInfo.innerHTML = "";
}


const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", sendMessage);

function sendMessage(event) {
    event.preventDefault();
    showMessage("Please wait, sending your email");
}


for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function(event) {
        event.target.style = "background-color: #808080;";
    });
    item.addEventListener("mouseleave", function(event) {
        event.target.style = "";
    });
}