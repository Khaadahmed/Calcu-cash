// responsive.js
// This script dynamically adjusts calculator scaling and font sizes for responsiveness

function setCalculatorScale() {
  const calculator = document.querySelector('.calculator, .salary-calculator');
  if (!calculator) return;

  // Get viewport width
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  // Responsive scaling for desktop and mobile
  if (vw < 400) {
    calculator.style.width = '98vw';
    calculator.style.padding = '10px';
    calculator.style.fontSize = '1em';
  } else if (vw < 600) {
    calculator.style.width = '90vw';
    calculator.style.padding = '18px';
    calculator.style.fontSize = '1.1em';
  } else if (vw < 900) {
    calculator.style.width = '360px';
    calculator.style.padding = '20px';
    calculator.style.fontSize = '1.15em';
  } else {
    calculator.style.width = '400px';
    calculator.style.padding = '24px';
    calculator.style.fontSize = '1.18em';
  }

  // Make display font responsive
  const display = document.querySelector('.display');
  if (display) {
    if (vw < 400) {
      display.style.fontSize = '1.1em';
      display.style.height = '2.2em';
    } else if (vw < 600) {
      display.style.fontSize = '1.4em';
      display.style.height = '2.5em';
    } else if (vw < 900) {
      display.style.fontSize = '2em';
      display.style.height = '2.8em';
    } else {
      display.style.fontSize = '2.2em';
      display.style.height = '3em';
    }
  }
}

// Run on load and on resize
window.addEventListener('DOMContentLoaded', setCalculatorScale);
window.addEventListener('resize', setCalculatorScale);
