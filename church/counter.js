// https://www.webdong.dev/post/build-a-counter-using-javascript/

let counter = 0;

const counterDisplay = document.getElementById("counterDisplay");
const counterAddButton = document.getElementById("add");
const counterResetButton = document.getElementById("reset");
const counterMinusButton = document.getElementById("minus");
const counterButtons = document.getElementById("buttonGroup");



counterButtons.addEventListener("click", (e) => {
  if (e.target.id === "add") {
    addCounter();
  } else if (e.target.id === "reset") {
    resetCounter();
  } else if (e.target.id === "minus") {
    subtractCounter();
  }
});

function renderCounter() {
  counterDisplay.textContent = counter;
}

function addCounter() {
  counter++;
  renderCounter(counter);
}

function resetCounter() {
  counter = 0;
  renderCounter(counter);
}

function subtractCounter() {
  counter--;
  renderCounter(counter);
}

renderCounter(counter);


let counter2 = 0;
const counterDisplay2 = document.getElementById("counterDisplay2");
const counterAddButton2 = document.getElementById("add2");
const counterResetButton2 = document.getElementById("reset2");
const counterMinusButton2 = document.getElementById("minus2");
const counterButtons2 = document.getElementById("buttonGroup2");



counterButtons2.addEventListener("click", (e) => {
  if (e.target.id === "add2") {
    addCounter2();
  } else if (e.target.id === "reset2") {
    resetCounter2();
  } else if (e.target.id === "minus2") {
    subtractCounter2();
  }
});

function renderCounter2() {
  counterDisplay2.textContent = counter2;
}

function addCounter2() {
  counter2++;
  renderCounter2(counter2);
}

function resetCounter2() {
  counter2 = 0;
  renderCounter2(counter2);
}

function subtractCounter2() {
  counter2--;
  renderCounter2(counter2);
}

renderCounter2(counter);

