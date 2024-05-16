const refs = {
  buttonEl: document.getElementById("js-button"),
  lineElFirst: document.querySelector(".button__line-1"),
  lineElSecond: document.querySelector(".button__line-2"),
  lineElThird: document.querySelector(".button__line-3"),
};

refs.buttonEl.addEventListener("click", onButtonChange);

function onButtonChange() {
  refs.lineElFirst.classList.toggle("change");
  refs.lineElSecond.classList.toggle("change");
  refs.lineElThird.classList.toggle("change");
}
