function searchWeb(){

const word=document.getElementById("search").value;

if(word.trim()=="") return;

window.open(
"https://duckduckgo.com/?q="+
encodeURIComponent(word),
"_blank"
);

}

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.className="star";

const size=Math.random()*3+1;

s.style.width=size+"px";
s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*3+"s";

stars.appendChild(s);

}
