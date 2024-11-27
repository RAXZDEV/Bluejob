const nav = document.querySelector(".sideNav");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navBg = document.getElementById("navBg");

menu.onclick = function(){
	nav.style = "display: flex";
	navBg.style = "display: flex";
}

navBg.onclick = function(){
	nav.style = "display: none";
	navBg.style = "display: none";
}

const inbox = document.getElementById("inbox");
const profile = document.getElementById("user");
const search = document.getElementById("search");
const home = document.getElementById("home");

const main = document.querySelector(".main");
const inboxC = document.querySelector(".inbox");
const box1 = document.getElementById("box1");
const searchP = document.querySelector(".searchP");
const homeP = document.querySelector(".homeP");

profile.onclick = function(){
	main.style ="display: flex;"
	inboxC.style ="display: none;"
	searchP.style ="display: none;"
	homeP.style ="display: none;"
	profile.style ="fill: #fff; filter: drop-shadow(0 0 5px #fff)"
	inbox.style ="fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	box1.style ="box-shadow: 0 0 5px #0092FF; display: flex"
	search.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	home.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
}
inbox.onclick = function(){
	main.style = "display: none;"
	inboxC.style ="display: flex;"
	searchP.style ="display: none;"
	homeP.style ="display: none;"
	
	profile.style ="fill: #9C9C9C; filter: drop-shadow(0 0 0px #fff)"
	inbox.style ="fill: #fff; filter: drop-shadow(0 0 5px #fff)"
	box1.style ="display: none"
	search.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	home.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
}
box1.onclick = function(){
	main.style = "display: none;"
	inboxC.style = "display: flex;"
	searchP.style ="display: none;"
	homeP.style ="display: none;"
	
	profile.style = "fill: #9C9C9C; filter: drop-shadow(0 0 0px #fff)"
	inbox.style = "fill: #fff; filter: drop-shadow(0 0 5px #fff)"
	box1.style = "display: none"
	search.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	home.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
}
search.onclick = function() {
	main.style = "display: none;"
	inboxC.style = "display: none;"
	searchP.style ="display: flex;"
	homeP.style ="display: none;"

	profile.style = "fill: #9C9C9C; filter: drop-shadow(0 0 0px #fff)"
	inbox.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	box1.style = "display: none"
	search.style = "fill: #fff; filter: drop-shadow(0 0 5px #fff)"
	home.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	box1.style ="box-shadow: 0 0 5px #0092FF; display: flex"
}
home.onclick = function() {
	main.style = "display: none;"
	inboxC.style = "display: none;"
	homeP.style ="display: flex;"

	profile.style = "fill: #9C9C9C; filter: drop-shadow(0 0 0px #fff)"
	inbox.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	box1.style = "display: none"
	search.style = "fill: #969696; filter: drop-shadow(0 0 0px #fff)"
	home.style = "fill: #fff; filter: drop-shadow(0 0 5px #fff)"
	box1.style ="box-shadow: 0 0 5px #0092FF; display: flex"
	searchP.style ="display: none;"
}
close.onclick = function(){
	homeP.style ="display: flex;"
	main.style = "display: none;"
	profile.style = "fill: #9C9C9C; filter: drop-shadow(0 0 0px #fff)"
	home.style = "fill: #fff; filter: drop-shadow(0 0 5px #fff)"
}