let ubicacionprincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamiento = window.pageYOffset;
    if(ubicacionprincipal>=desplazamiento){
        document.getElementsByTagName("nav")[0].style.top ="0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionprincipal = desplazamiento;
})
//menu

let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    
    enlacesheader.classList.toggle("menudos");
})