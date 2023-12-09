document.addEventListener("DOMContentLoaded", function () {
  // Загрузка шапки
  fetch("./html/header.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("body header").innerHTML = html;

      // Реализация бургер-меню в шапке сайта
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
    });

  // Загрузка подвала
  fetch("./html/footer.html")
    .then((response) => response.text())
    .then((html) => (document.querySelector("body footer").innerHTML = html));
});
