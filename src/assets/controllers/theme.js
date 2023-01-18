let url_raiz = "../../assets/icons/";

const change_theme_claro_login = () => {
    if(document.documentElement.style.getPropertyValue("--color-fondo-login") !== "#00ffff"){
        document.documentElement.style.setProperty("--color-fondo-login","#00ffff");
        document.documentElement.style.setProperty("--color-text-login","#000000");   
        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-claro-hover-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-hover-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-oscuro-hover-active",'#000000');
        document.documentElement.style.setProperty("--color-text-error-login",'#0000ff');
    }
}
const change_theme_intermedio_login = () => {
    if(document.documentElement.style.getPropertyValue("--color-text-login") !== "#00ffff" || document.documentElement.style.getPropertyValue("--color-text-login") !== "#000000"){
        document.documentElement.style.setProperty("--color-fondo-login","#000000");
        document.documentElement.style.setProperty("--color-text-login","#2df9bf");   
        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#2df9bf');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-claro-hover-active",'#2df9bf');
        document.documentElement.style.setProperty("--color-theme-intermedio-hover-active",'#2df9bf');
        document.documentElement.style.setProperty("--color-theme-oscuro-hover-active",'#2df9bf');
        document.documentElement.style.setProperty("--color-text-error-login",'#ff0000');
    }
}
const change_theme_oscuro_login = () => {
    if(document.documentElement.style.getPropertyValue("--color-text-login") !== "#00ffff"){
        document.documentElement.style.setProperty("--color-fondo-login","#000000");
        document.documentElement.style.setProperty("--color-text-login","#00ffff");   
        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-claro-hover-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-intermedio-hover-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-oscuro-hover-active",'#00ffff');
        document.documentElement.style.setProperty("--color-text-error-login",'#ff0000');
    }
}
const change_theme_claro = () => {
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#ffffffb1"){
        document.documentElement.style.setProperty("--color-font-primary","#ffffffb1");
        document.documentElement.style.setProperty("--color-text-primary","#00b900");
        document.documentElement.style.setProperty("--color-text-secondary",'#000000');
        document.documentElement.style.setProperty("--color-text-tertiary",'#000000');
        document.documentElement.style.setProperty("--color-text-quaternary",'#000000');
        document.documentElement.style.setProperty("--color-text-quintenary",'#000000');
        document.documentElement.style.setProperty("--color-theme-claro-active",'#00b900');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'white');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'white');

        Version_logos_habilidad("1");
        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = url_raiz+"next_4.png";
        }
    }
}
const change_theme_intermedio = () => {
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#000000"){
        document.documentElement.style.setProperty("--color-font-primary","#000000");
        document.documentElement.style.setProperty("--color-text-primary","#00ffff");
        document.documentElement.style.setProperty("--color-text-secondary",'#ffffffde');
        document.documentElement.style.setProperty("--color-text-tertiary",'#ffffffb1');
        document.documentElement.style.setProperty("--color-text-quaternary",'#ffffff80');
        document.documentElement.style.setProperty("--color-text-quintenary",'#ffffff4d');
        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#00ffff');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#000000');

        Version_logos_habilidad("2");
        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = url_raiz+"next_5.png";
        }
    }
}
const change_theme_oscuro = () => {
    if(document.documentElement.style.getPropertyValue("--color-font-primary") !== "#02172d"){
        document.documentElement.style.setProperty("--color-font-primary","#02172d");
        document.documentElement.style.setProperty("--color-text-primary","#2df9bf");
        document.documentElement.style.setProperty("--color-text-secondary",'#ffffffde');
        document.documentElement.style.setProperty("--color-text-tertiary",'#ffffffb1');
        document.documentElement.style.setProperty("--color-text-quaternary",'#ffffff80');
        document.documentElement.style.setProperty("--color-text-quintenary",'#ffffff4d');

        document.documentElement.style.setProperty("--color-theme-claro-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-intermedio-active",'#000000');
        document.documentElement.style.setProperty("--color-theme-oscuro-active",'#2df9bf');

        Version_logos_habilidad("3");

        if(document.getElementById("next1_proyecto")){
            document.getElementById("next1_proyecto").src = url_raiz+"next_6.png";
        }
    }
}
function Version_logos_habilidad(number_version){ 
    (document.getElementById("mysql"))? document.getElementById("mysql").src = Get_src("mysql",number_version) : undefined;
    (document.getElementById("next"))? document.getElementById("next").src = Get_src("next",number_version) : undefined;
}
function Get_src(name_icon,number_version){
    return "../../assets/icons/"+name_icon+"_"+number_version+".png";
}