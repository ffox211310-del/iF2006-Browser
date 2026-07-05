const input=document.getElementById("search");
const iframe=document.getElementById("browser");
const button=document.getElementById("go");

button.onclick=function(){

const word=input.value;

iframe.src=
"https://duckduckgo.com/?q="+
encodeURIComponent(word);

}
