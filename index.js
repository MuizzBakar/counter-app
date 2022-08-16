let countEl = document.querySelector("#count-el");

let count = 0;

function increase() {
  count += 1;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
}
