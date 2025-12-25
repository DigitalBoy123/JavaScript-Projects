let screenValue = "";

let button = document.querySelectorAll("button");
let box = document.getElementById("main-box");
let numbutn = document.querySelectorAll(".butn");
let optns = document.querySelectorAll(".obutn");
let equal = document.querySelector("#btn-equal");
let genrbutns = document.querySelectorAll(".gbutn");
 
numbutn.forEach(nbutn => {
    nbutn.addEventListener("click", () => {
        if (screenValue.length < 11) {
            if (nbutn.innerText === "=") {
                screenValue += "";
                box.innerText = screenValue;
            } else {
                screenValue += nbutn.innerText;
                box.innerText = screenValue;
            }
             
        }
    });
});

optns.forEach(opt => {
    opt.addEventListener("click", () => {
        const operator = "+-x÷";
        if (!operator.includes(screenValue.slice(-1))) {
            screenValue += opt.innerText;
            box.innerText = screenValue;
        }
    });
});

equal.addEventListener("click", () => {
    let expression = screenValue.replace(/x/g, '*').replace(/÷/g, '/');
    let result = eval(expression);
    if (String(screenValue).length > 10) {
        result = result.toPrecision(7);
    }
    if (!isFinite(result) || isNaN(result)) {
        result = "Error!";
        box.innerText = result;
    } else {
        box.innerText = result;
        screenValue = String(result);
    }
});

genrbutns.forEach(gbutn => {
    gbutn.addEventListener("click", () => {
        if (gbutn.innerText === "." && !screenValue.includes(".")) {
            screenValue += gbutn.innerText;
            box.innerText = screenValue;
        } else if (gbutn.innerText === "C") {
            screenValue = "";
            box.innerText = screenValue;
        } else if (gbutn.innerText === "del") {
            screenValue = screenValue.slice(0, -1);
            box.innerText = screenValue;
        }
    });
});