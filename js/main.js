var display = document.getElementById('display');
var sum = 0;

function toScreen(val) {
  display.value += val;
}

function clearScreen() {
  sum = 0;
  display.value = '';
}

function backspace() {
  var length = display.value.length;
  display.value = display.value.slice(0, length - 1);
}

function power() {
  var x = display.value;
  display.value = x * x;
}

function answer() {
  sum = eval(display.value);
  display.value = sum;
}
