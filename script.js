let firstSectionCurrency = "";
let secondSectionCurrency = "";

const fsFirstBtn = document.querySelector('.firstRub');
const fsSecondBtn = document.querySelector('.firstUsd');
const fsThirdBtn = document.querySelector('.firstEur');
const fsFourthBtn = document.querySelector('.firstGbp');

fsFirstBtn.addEventListener('click', () => {
    fsFirstBtn.style = "background: #833AE0;" +
    "color: #ffffff;";
    fsSecondBtn.style = "background: white;" +
    "color: #9F9F9F;";
})

fsSecondBtn.addEventListener('click', () => {
    fsSecondBtn.style = "background: #833AE0;" +
    "color: #ffffff;";
    fsFirstBtn.style = "background: #ffffff;" +
    "color: #9F9F9F;";
})



const ssFirstBtn = document.querySelector('.secondRub');
const ssSecondBtn = document.querySelector('.secondUsd');
const ssThirdBtn = document.querySelector('.secondEur');
const ssFourthBtn = document.querySelector('.secondGbp');




fetch(`https://api.exchangerate.host/latest?base=USD&symbols=RUB `)
.then(res => res.json())
.then(data => {console.log(data);})