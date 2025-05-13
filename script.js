let isScientific = false;

function startCalculator() {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }

  document.getElementById("intro").classList.add("hidden");
  const calc = document.getElementById("calculator");
  calc.classList.remove("hidden");
  document.getElementById("greetUser").innerText = `Hi ${name}! Let’s do some math 🤓`;
}

function appendValue(val) {
  const display = document.getElementById("display");
  if (display.value === "Error") display.value = "";
  display.value += val;
}

function appendFunction(fn) {
  const display = document.getElementById("display");
  if (display.value === "Error") display.value = "";
  display.value += fn + "(";
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function toggleMode() {
  isScientific = !isScientific;

  // Toggle visibility
  document.getElementById("basicButtons").classList.toggle("hidden", isScientific);
  document.getElementById("scientificButtons").classList.toggle("hidden", !isScientific);

  // Change button text
  const modeBtn = document.getElementById("modeBtn");
  modeBtn.innerText = isScientific ? "Switch to Basic 🧮" : "Switch to Scientific 🧠";

  // Change layout
  const calculatorBox = document.getElementById("calculator");
  calculatorBox.classList.toggle("scientific-mode", isScientific);
}
