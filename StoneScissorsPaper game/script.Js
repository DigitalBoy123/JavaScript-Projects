let yourscore = 0;
let compscore = 0;

let choices = ["paper", "scissors", "rock"];

function compChoice() {
    const randChoice = Math.floor(Math.random() * choices.length);
    return choices[randChoice];
}

let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors"); 
let rock = document.querySelector("#rock");
let picker = document.querySelector("#last-head");
let myscore = document.querySelector("#my-score");
let botscore = document.querySelector("#bot-score"); 
let you;

let Mainfunction = () => {

    paper.addEventListener("click", () => {
        const computer = compChoice();
        you = "paper";
        if (computer === you) {
            picker.innerText = "Game draw!";
            picker.style.backgroundColor = "rgb(8, 8, 66)";

        } else if (computer === "scissors" && you === "paper") {
            picker.innerText = "You Lost!";
            picker.style.backgroundColor = "red";
            botscore.innerText = ++compscore;
        } else {
            picker.innerText = "You Won!";
            picker.style.backgroundColor = "green";
            myscore.innerText = ++yourscore;
        }
    })

    rock.addEventListener("click", () => {
        const computer = compChoice();
        you = "rock";
        if (computer === you) {
            picker.innerText = "Game draw!";
            picker.style.backgroundColor = "rgb(8, 8, 66)";

        } else if (computer === "paper" && you === "rock") {
            picker.innerText = "You Lost!";
            picker.style.backgroundColor = "red";
            botscore.innerText = ++compscore;
        } else {
            picker.innerText = "You Won!";
            picker.style.backgroundColor = "green";
            myscore.innerText = ++yourscore;
        }
    })

    scissors.addEventListener("click", () => {
        const computer = compChoice();
        you = "scissors";
        if (computer === you) {
            picker.innerText = "Game draw!";
            picker.style.backgroundColor = "rgb(8, 8, 66)";

        } else if (computer === "rock" && you === "scissors") {
            picker.innerText = "You Lost!";
            picker.style.backgroundColor = "red";
            botscore.innerText = ++compscore;
        } else {
            picker.innerText = "You Won!";
            picker.style.backgroundColor = "green";
            myscore.innerText = ++yourscore;
        }
    })
}

Mainfunction();

