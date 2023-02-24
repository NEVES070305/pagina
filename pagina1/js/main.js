const html = document.querySelector("html");
const body = document.querySelector("body");
var data = new Date();
var horas = data.getHours();

console.log(horas);

window.addEventListener("load", function () {
  if (horas < 18) {
    html.classList.toggle("white-mode");
    body.classList.toggle("white-mode");
  }
});



var text1 = document.getElementById('textareaCode').value
var text2 = document.getElementById('textareaJS').value
var bt1 = document.getElementById('gerar')
var bt2 = document.getElementById('voltar')
var div1 = document.getElementById('caixa')
var div2 = document.getElementById('prog')

bt1.addEventListener("click", traduzir)
bt2.addEventListener("click", voltar)


function traduzir(){
  var obs = document.getElementById('obs')
  var text1 = document.getElementById('textareaCode').value
  var text2 = document.getElementById('textareaJS').value
  document.getElementById('prog').innerHTML = text1
  document.getElementById('jsUser').innerHTML = text2
  div1.style.display='none'
  div2.style.display='block'
  bt1.style.display='none'
  bt2.style.display='block'
  obs.style.display='none'
}

function voltar(){
  div1.style.display='flex'
  div2.style.display='none'
  bt1.style.display='flex'
  bt2.style.display='none'
  div1.style.flexDirection='row'
  bt1.style.justifyContent='center'
  bt1.style.alignItems='center'
  obs.style.display='flex'

}
