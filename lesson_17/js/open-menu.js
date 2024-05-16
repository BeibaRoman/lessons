const refs = {
  buttonEl: document.getElementById("js-button"),
  menuEl: document.querySelector(".js-open-menu"),
};

refs.buttonEl.addEventListener("click", onOpenCloseMenu);

function onOpenCloseMenu() {
  refs.menuEl.classList.toggle("mobile-menu--transform");
}
