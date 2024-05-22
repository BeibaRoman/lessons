const refs = {
  buttonEl: document.getElementById("js-button"),
  menuEl: document.querySelector(".js-open-menu"),
};

refs.buttonEl.addEventListener("click", onOpenCloseMenu);

refs.menuEl.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("js-close-menu")) {
    onOpenCloseMenu();
  }
});

function onOpenCloseMenu() {
  refs.menuEl.classList.toggle("mobile-menu--transform");
}
