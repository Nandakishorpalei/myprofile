import common from "./component/common.js";
var body = document.body;
body.innerHTML=common();

var body = document.body;
var container = document.getElementById("container");

body.onload=start;

function start(){
container.setAttribute("class","start");
document.getElementById("mypic").setAttribute("class","startPic");
}

setTimeout(function(){
container.style.borderBottom ="501px solid #060724";
container.style.borderRight= "1500px solid transparent";
container.style.borderRadius="0%";
body.style.backgroundColor="rgba(148,233,226,1)";
document.getElementById("mypic").style.opacity="1";
document.getElementById("navbar").style.marginTop="10px";
},500)

