const form = document.getElementById("form");
const formItems = document.querySelectorAll(".form-item");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formItems.forEach(function (area) {
    if (area.value == "") {
      area.parentElement.classList.add("erro");
      area.parentElement.classList.remove("ok");
    } else {
      area.parentElement.classList.add("ok");
      area.parentElement.classList.remove("erro");
    }
  });
});

formItems.forEach(function (area) {
  area.addEventListener("blur", () => {
    area.parentElement.classList.remove("erro");
    area.parentElement.classList.remove("ok");
  });
});
