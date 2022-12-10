getLocalStorage();
const botaoVoltar = document.querySelector("#voltarContato");
botaoVoltar.addEventListener("click", function () {
  window.location.assign = localStorage.getItem("link");
});