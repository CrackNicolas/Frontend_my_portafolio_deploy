const boton = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu-navegacion')

//Muestra el menu navegable
boton.addEventListener('click', () =>{
    menu.classList.toggle("spread")
})

//Oculta el menu navegable
window.addEventListener('click', e =>{  //Esto es un escuchador de eventos de la pagina
    if(menu.classList.contains('spread')){  //Verifica que el menu este visible antes de ocultar
        if(e.target!=menu){  //Verifica que el menu no vuelva cuando se presiona el mismo boton que lo muestra
            if(e.target!=boton){  //Verifica que el menu se oculte cuando NO fue presionado el boton que muestra el menu
                menu.classList.toggle("spread")
            }
        }
    }
})

//Ocultar y mostrar menu al hacer scrool
let ubicacion_principal = window.pageYOffset;
let nav = document.querySelector("#inicio"); 
let btn = document.querySelector(".btn-menu");

const hide_or_see_nav = () => {
    let ubicacion_actual = this.window.pageYOffset;
    if(ubicacion_principal >= ubicacion_actual){
        nav.style.top = "0px";
        btn.style.display = "flex";
    }else{
        nav.style.top = "-80px";
        btn.style.display = "none";
    }
    ubicacion_principal = ubicacion_actual;
}

window.addEventListener('scroll',hide_or_see_nav);