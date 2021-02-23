var p1=Math.random();
p1=p1*6+1;
p1=Math.floor(p1);
v1=document.querySelectorAll("img")[0];
v1.setAttribute("src","images/dice"+p1+".png");

var p2=Math.random();
p2=p2*6+1;
p2=Math.floor(p2);
v2=document.querySelectorAll("img")[1];
v2.setAttribute("src","images/dice"+p2+".png");



if(p1>p2){
    document.querySelector("h1").innerText="player1 wins";
}

else if (p1<p2){
    document.querySelector("h1").innerText="player2 wins";
}

else{
    document.querySelector("h1").innerText="draw";
}
