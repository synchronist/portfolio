let form = document.querySelector("#formContato");
const array = [];
form.addEventListener('submit', (event) => {
  event.preventDefault();

  var nome = JSON.stringify(event.target.elements['contatoNome'].value);
  var mensagem = JSON.stringify(event.target.elements['taMensagem'].value);
  array.push({
    nome,
    mensagem
  })
  alert("Mensagem Enviada!");
  console.log(array); 
})

let submeter = document.querySelector("#formSubmeter");

submeter.addEventListener('click', (event) => {
localStorage.setItem('mensagens', JSON.stringify(array));
array.length = 0;
alert("Valores Enviados a Local Storage com sucesso!");
})



var botaoLS = document.querySelector("#limparLS");
botaoLS.addEventListener("click", function () {
  localStorage.clear();
  alert("Local Storage limpa com sucesso!");
});

