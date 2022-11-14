let firstSectionCurrency = 0;
let secondSectionCurrency = 0;
let firstBtnText = "";
let secondBtnText = "";
let fs = 0;
let ss = 0;

const fsFirstBtn = document.querySelector('.firstRub');
const fsSecondBtn = document.querySelector('.firstUsd');
const fsThirdBtn = document.querySelector('.firstEur');
const fsFourthBtn = document.querySelector('.firstGbp');

fsFirstBtn.addEventListener('click', () => {
    fs = 1
    fsFirstBtn.style = "background: #833AE0;" + "color: white;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;";
})
fsSecondBtn.addEventListener('click', () => {
    fs = 2;
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: #833AE0;" + "color: white;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
})
fsThirdBtn.addEventListener('click', () => {
    fs = 3
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: #833AE0;" + "color: white;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;";
})
fsFourthBtn.addEventListener('click', () => {
    fs = 4
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: #833AE0;" + "color: white;";
})

const ssFirstBtn = document.querySelector('.secondRub');
const ssSecondBtn = document.querySelector('.secondUsd');
const ssThirdBtn = document.querySelector('.secondEur');
const ssFourthBtn = document.querySelector('.secondGbp');

ssFirstBtn.addEventListener('click', () => {
    ss = 1;
    ssFirstBtn.style = "background: #833AE0;" + "color: white;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;";
})
ssSecondBtn.addEventListener('click', () => {
    ss = 2;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: #833AE0;" + "color: white;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
})
ssThirdBtn.addEventListener('click', () => {
    ss = 3;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: #833AE0;" + "color: white;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;";
})
ssFourthBtn.addEventListener('click', () => {
    ss = 4;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: #833AE0;" + "color: white;";
})

const fInput = document.querySelector('.firstInput')
const sInput = document.querySelector('.secondInput')

function firstChange() {
    switch(fs){
        case 1: firstBtnText = 'RUB'
        break;
        case 2: firstBtnText = 'USD'
        break;
        case 3: firstBtnText = 'EUR'
        break;
        case 4: firstBtnText = 'GBP'
    }
    switch(ss){
        case 1: secondBtnText = 'RUB'
        break;
        case 2: secondBtnText = 'USD'
        break;
        case 3: secondBtnText = 'EUR'
        break;
        case 4: secondBtnText = 'GBP'
    }
    fetch(`https://api.exchangerate.host/latest?base=${firstBtnText}&symbols=${secondBtnText}`)
    .then(res => res.json())
    .then(data => {
        firstSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })
    function valueSet() {
        sInput.value = fInput.value * firstSectionCurrency;
    }
    setTimeout(valueSet, 100)
}

function secondChange() {
    switch(fs){
        case 1: firstBtnText = 'RUB'
        break;
        case 2: firstBtnText = 'USD'
        break;
        case 3: firstBtnText = 'EUR'
        break;
        case 4: firstBtnText = 'GBP'
    }
    switch(ss){
        case 1: secondBtnText = 'RUB'
        break;
        case 2: secondBtnText = 'USD'
        break;
        case 3: secondBtnText = 'EUR'
        break;
        case 4: secondBtnText = 'GBP'
    }
    fetch(`https://api.exchangerate.host/latest?base=${secondBtnText}&symbols=${firstBtnText}`)
    .then(res => res.json())
    .then(data => {
        secondSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })
    function valueSet() {
        fInput.value = sInput.value * secondSectionCurrency;
    }
    setTimeout(valueSet, 100)
}