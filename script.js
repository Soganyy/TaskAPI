let firstSectionCurrency = 0;
let secondSectionCurrency = 0;
let firstBtnText = "";
let secondBtnText = "";
let fs = 1;
let ss = 2;

function change() {
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
}

function fetchingData1() {
    fetch(`https://api.exchangerate.host/latest?base=${firstBtnText}&symbols=${secondBtnText}`)
    .then(res => res.json())
    .then(data => {
        firstSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })
    function valueSet1() {
        sInput.value = fInput.value * firstSectionCurrency;
    }
    setTimeout(valueSet1, 1000)
}

function fetchingData2() {
    fetch(`https://api.exchangerate.host/latest?base=${secondBtnText}&symbols=${firstBtnText}`)
    .then(res => res.json())
    .then(data => {
        secondSectionCurrency = data.rates[Object.keys(data.rates)[0]];
    })
    function valueSet2() {
        fInput.value = sInput.value * secondSectionCurrency;
    }
    setTimeout(valueSet2, 1000)
}

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
    change();
    fetchingData1();
})
fsSecondBtn.addEventListener('click', () => {
    fs = 2;
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: #833AE0;" + "color: white;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
    change();
    fetchingData1();
})
fsThirdBtn.addEventListener('click', () => {
    fs = 3
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: #833AE0;" + "color: white;";
    fsFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    change();
    fetchingData1();
})
fsFourthBtn.addEventListener('click', () => {
    fs = 4
    fsFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    fsSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    fsThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    fsFourthBtn.style = "background: #833AE0;" + "color: white;";
    change();
    fetchingData1();
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
    change();
    fetchingData2();
})
ssSecondBtn.addEventListener('click', () => {
    ss = 2;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: #833AE0;" + "color: white;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;"; 
    change();
    fetchingData2();
})
ssThirdBtn.addEventListener('click', () => {
    ss = 3;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: #833AE0;" + "color: white;";
    ssFourthBtn.style = "background: white;" + "color: #9F9F9F;";
    change();
    fetchingData2();
})
ssFourthBtn.addEventListener('click', () => {
    ss = 4;
    ssFirstBtn.style = "background: white;" + "color: #9F9F9F;";
    ssSecondBtn.style = "background: white;" + "color: #9F9F9F;";
    ssThirdBtn.style = "background: white;" + "color: #9F9F9F;";
    ssFourthBtn.style = "background: #833AE0;" + "color: white;";
    change();
    fetchingData2();
})

const fInput = document.querySelector('.firstInput')
const sInput = document.querySelector('.secondInput')

fetchingData1();
fetchingData2();

function firstChange() {
    sInput.value = fInput.value * firstSectionCurrency;
}

function secondChange() {
    fInput.value = sInput.value * secondSectionCurrency;
}