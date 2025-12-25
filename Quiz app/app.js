import { questions } from './data.js';

let index = 0;
let result = questions.length;
let right = 0;

let h2 = document.querySelector('h2');
let input = document.querySelectorAll('input');
let button = document.querySelector('.sub-button');
let label = document.querySelectorAll('label');
let mainbox = document.querySelector('.main-box');
let customAlert = document.querySelector('#custom-alert');
let alrbtn = document.querySelector('.close-btn');

alrbtn.addEventListener('click', () => {
    customAlert.style.display = 'none';
})

const loadQuestion = () => {
    h2.innerText = `${index + 1}) ${questions[index].que}`;
    let keys = ['a', 'b', 'c', 'd'];
    let data = questions[index];
    label.forEach((label, idx) => {
        let currkey = keys[idx];
        label.innerText = data[currkey];
    });
}

const checkAnswer = () => {
    let selectedanswer = document.querySelector('input[name="option"]:checked')
    if (!selectedanswer) {
        customAlert.style.display = 'flex';
        return false;
    }
    else {
        let userdata = selectedanswer.value;
        let answer = questions[index].correct;
        if (userdata === answer) {
            right++;
        }
        return true;
    }
}

const reset = () => {
    input.forEach((inpcheck) => {
        inpcheck.checked = false;
    })
}

const submitAnswer = () => {
    if (checkAnswer() === false) {
        return;
    } else {
        if (index < result - 1) {
            index++;
            loadQuestion();
            reset();
        } else {
            showResult();
        }
    }
}

loadQuestion();
button.addEventListener('click', submitAnswer);

const showResult = () => {
    mainbox.innerHTML = `
    <h1 style="text-align: center; 
    background: white; color: #000000ff;">Final Result</h1>
    <p style="color: green; font-size: 1.5rem; font-weight: bold; margin-left: 18px">
        You got ${right}/${result}
    </p>
    <h3 style="color: #555;">Thanks for attempting!</h3>
    <button onclick="location.reload()" style="padding: 13px 30px; 
    cursor: pointer; background-color: black; 
    border-radius: 10px; color: white; 
    align-self: center; border: none; font-size: 0.9rem;">Start Again</button>
    `;
}