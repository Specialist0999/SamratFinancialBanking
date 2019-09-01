var el= document.querySelector(".nav0"); 

function changeNavClass() {
    var y = window.scrollY;
    if (y==0) {
        el.classList.remove("navbar-light");
        el.classList.add("navbar-dark");
        el.style.background= "transparent";
    }
    else {
        el.classList.add("navbar-light");
        el.classList.remove("navbar-dark"); 
        el.style.background="rgba(255,255,255,1)";
        
    }
}


if (el) {
    window.addEventListener("scroll", changeNavClass);  
}

