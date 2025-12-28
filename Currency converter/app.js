let dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector(".submit-btn");
let base_url = "https://v6.exchangerate-api.com/v6/1707ef6dcab60e2396f58165/latest"
let rate = document.querySelector("#main-rate");
let amount = document.querySelector(".amount-ent input");
let from = document.querySelector(".from select");
let to = document.querySelector(".to select");

for (let select of dropdowns) {
    let container = select.parentElement.parentElement;
    for (currcode in countryList) {
        let option = document.createElement("option");
        select.append(option);
        option.innerText = currcode;
        option.value = currcode;
        if (container.classList.contains("from") && currcode === "USD") {
            option.selected = "selected";
        }
        else if (container.classList.contains("to") && currcode === "PKR") {
            option.selected = "selected";
        }
    }

    select.addEventListener("change", (evt) => {
        flags(evt.target);
    });
    flags(select);
}

function flags(element) {
    let preCode = element.value;
    let countCode = countryList[preCode];
    let source = `https://flagsapi.com/${countCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = source;
}

button.addEventListener("click", (evet) => {
    evet.preventDefault();
    if (amount.value < 0 || amount.value === "") {
        amount.value = 1;
    }
    apidata(from.value, to.value);

});

let apidata = async (code1, code2) => {
    try {
        let main_url = `${base_url}/${code1}`;
        let response = await fetch(main_url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        let data = await response.json();
        let output = data.conversion_rates[code2];
        let fullamount = amount.value * output;
        rate.innerText = `${amount.value} ${code1} = ${fullamount.toFixed(2)} ${code2}`;
    } catch (error) {
        console.error("Failed to fetch rates:", error);
        rate.innerText = "Error fetching rates. Please try again.";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    apidata("USD", "PKR");
})



