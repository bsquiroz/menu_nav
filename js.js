const $MENU = document.querySelector("#menu");
const $CLOSE = document.querySelector("#close");
const $MULTI = document.querySelector("#multi");
const $LINKS = document.querySelectorAll(".list li a");
const $CONTENT_ICONS = document.querySelector("#content_icons");

//Cierra el menu cuando le damos clic a un enlace
$LINKS.forEach((Element) => {
    Element.addEventListener("click", () => {
        toggle_buttons();
    });
});

//abre y cierra el menu cuando le damos clic al menu
$CONTENT_ICONS.addEventListener("click", () => {
    toggle_buttons();
    closeOrOpen("icon_multi btn", "icon_none");
});

//funcion encargada de esconder y mostrar el menu
function toggle_buttons() {
    $MENU.classList.toggle("menu_show");
}

//nameClassBtn, clases que debe de tener en el value
//nameClassNone, nombre de la clase que le da display none
function closeOrOpen(nameClassBtn, nameClassNone) {
    //variable auxiliar encargada de guardar la clase para verificar si es un icono o el otro
    const aux = $MULTI.classList.value;
    //si es verdadero es porque el menu esta cerrado se pone la equis y se esconden los cuadros
    if (aux === nameClassBtn) {
        $MULTI.classList.add(nameClassNone);
        $CLOSE.classList.remove(nameClassNone);
        //esta abierto, se puede ver equis, ahora se esconde equis y salen los cuadros
    } else {
        $MULTI.classList.remove(nameClassNone);
        $CLOSE.classList.add(nameClassNone);
    }
}
