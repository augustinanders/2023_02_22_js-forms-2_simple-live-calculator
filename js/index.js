console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  event.preventDefault();
  calculate();
});

secondInput.addEventListener("input", (event) => {
  event.preventDefault();
  calculate();
});

function calculate() {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  result.textContent = firstValue * secondValue;
}
