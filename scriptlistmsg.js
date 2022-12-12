const botaoVoltar = document.querySelector("#voltarContato");
botaoVoltar.addEventListener("click", function () {
  localStorage.clear();
  document.location.href = "contato.html";
});

const botaoCarregar = document.querySelector("#carregarMensagens");
botaoCarregar.addEventListener("click", function () {
  var mensagensRecebidas = JSON.parse(localStorage.getItem("mensagens"));
  console.log(mensagensRecebidas);
  for(let i = 0; i < mensagensRecebidas.length; i++)
  {
  document.querySelector("#recebendoMensagens").innerHTML += "Nome : " + mensagensRecebidas[i].nome + " Mensagem : " + mensagensRecebidas[i].mensagem;
  document.querySelector("#recebendoMensagens").innerHTML += "<br>";
  }
  

})