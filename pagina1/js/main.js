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
  document.getElementById('link').setAttribute("href", "./css/style2.css")
  document.getElementById('prog').innerHTML = text1
  document.getElementById('jsUser').innerHTML = text2
 
  obs.style.display='none'
}

function voltar(){
  document.getElementById('link').setAttribute("href", "./css/style.css")
 
  obs.style.display='flex'

}
