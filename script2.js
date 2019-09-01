var links = document.querySelectorAll(".nav-link");
var i;

function linkHov() {
    links[i].style.background="black";
}

for (i=0; i<links.length ; i++) {
    links[i].addEventListener("mouseenter", linkHov);
}