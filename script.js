// Declaring Variables
let firstSectionCurrency = 0;
let secondSectionCurrency = 0;
let firstBtnText = "";
let secondBtnText = "";
let fs = 1;
let ss = 2;

// DOM elements
const firstExchg = document.querySelector('.firstExchange');
const secondExchg = document.querySelector('.secondExchange');
const fInput = document.querySelector('.firstInput')
const sInput = document.querySelector('.secondInput')
const fsFirstBtn = document.querySelector('.firstRub');
const fsSecondBtn = document.querySelector('.firstUsd');
const fsThirdBtn = document.querySelector('.firstEur');
const fsFourthBtn = document.querySelector('.firstGbp');
const ssFirstBtn = document.querySelector('.secondRub');
const ssSecondBtn = document.querySelector('.secondUsd');
const ssThirdBtn = document.querySelector('.secondEur');
const ssFourthBtn = document.querySelector('.secondGbp');

// Function for checking selected buttons and fetching data
function fetching() {
    firstBtnText = fs = 1 ? 'RUB' : fs = 2 ? "USD" : fs = 3 ? "EUR" : "GBP";
    secondBtnText = ss = 1 ? 'RUB' : ss = 2 ? "USD" : ss = 3 ? "EUR" : "GBP";

    fetch(`https://api.exchangerate.host/latest?base=${firstBtnText}&symbols=${secondBtnText}`)
    .then(res => res.json())
    .then(data => {
        firstSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })

    fetch(`https://api.exchangerate.host/latest?base=${secondBtnText}&symbols=${firstBtnText}`)
    .then(res => res.json())
    .then(data => {
        secondSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })
}

// Functions for changing value of inputs and axchange information with delay after fetch
function valueSet1() {
    sInput.value = fInput.value * firstSectionCurrency;
    firstExchg.innerHTML = firstSectionCurrency;
    secondExchg.innerHTML = secondSectionCurrency;
}
function valueSet2() {
    fInput.value = sInput.value * secondSectionCurrency;
    firstExchg.innerHTML = firstSectionCurrency;
    secondExchg.innerHTML = secondSectionCurrency;
}

// Functions for combining fetching and calling value change functions
function fetchingData1() {
    fetching();
    setTimeout(valueSet1, 500)
}
function fetchingData2() {
    fetching();
    setTimeout(valueSet2, 500)
}

// Function for onclick that changes values on button click
function firstChange() {
    sInput.value = fInput.value * firstSectionCurrency;
}
function secondChange() {
    fInput.value = sInput.value * secondSectionCurrency;
}

// Styling and changing values on button click
fsFirstBtn.addEventListener('click', () => {
    fs = 1
    fsFirstBtn.style = "background: #833AE0;" + "color: white;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    fetchingData1();
})
fsSecondBtn.addEventListener('click', () => {
    fs = 2;
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: #833AE0;" + "color: white;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
    fetchingData1();
})
fsThirdBtn.addEventListener('click', () => {
    fs = 3
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: #833AE0;" + "color: white;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    fetchingData1();
})
fsFourthBtn.addEventListener('click', () => {
    fs = 4
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: #833AE0;" + "color: white;";
    fetchingData1();
})
ssFirstBtn.addEventListener('click', () => {
    ss = 1;
    ssFirstBtn.style = "background: #833AE0;" + "color: white;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    fetchingData2();
})
ssSecondBtn.addEventListener('click', () => {
    ss = 2;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: #833AE0;" + "color: white;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
    fetchingData2();
})
ssThirdBtn.addEventListener('click', () => {
    ss = 3;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: #833AE0;" + "color: white;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    fetchingData2();
})
ssFourthBtn.addEventListener('click', () => {
    ss = 4;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: #833AE0;" + "color: white;";
    fetchingData2();
})

// Setting values on first run of Program
fetchingData1();
fetchingData2();