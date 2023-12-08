const burgerButton = document.getElementById("hamb");
const popup = document.getElementById("popup");
const menu = document.getElementById("menu").cloneNode(1);

burgerButton.addEventListener("click", () => {
  popup.classList.toggle("open");
  burgerButton.classList.toggle("active");
  renderPopup();
});

function renderPopup() {
  popup.appendChild(menu);
}
