const $MENU = document.querySelector("#menu");
const $CLOSE = document.querySelector("#close");
const $MULTI = document.querySelector("#multi");
const $LINKS = document.querySelectorAll(".list li a");
const $CONTENT_ICONS = document.querySelector("#content_icons");

let open_or_close = true;

//Cierra el menu cuando le damos clic a un enlace
$LINKS.forEach((Element) => {
    Element.addEventListener("click", () => {
        toggle_buttons();
    });
});

//abre y cierra el menu cuando le damos clic al menu
$CONTENT_ICONS.addEventListener("click", () => {
    let html = "";

    toggle_buttons();

    //variable auxiliar encargada de guardar la clase para verificar si es un icono o el otro
    const aux = $MULTI.classList.value;
    //si es verdadero es porque el menu esta cerrado se pone la equis y se esconden los cuadros
    if (aux === "icon_multi btn") {
        $MULTI.classList.add("icon_none");
        $CLOSE.classList.remove("icon_none");
        //esta abierto, se puede ver equis, ahora se esconde equis y salen los cuadros
    } else {
        $MULTI.classList.remove("icon_none");
        $CLOSE.classList.add("icon_none");
    }

    //OTRA MANERA
    // if (open_or_close) {
    //     html = `
    //         <div class="icon_close btn" id="close">
    //             <ion-icon name="close-outline"></ion-icon>
    //         </div>
    //     `;
    //     $CONTENT_ICONS.innerHTML = html;
    // } else {
    //     html = `
    //         <div class="icon_multi btn" id="multi">
    //             <ion-icon name="grid-outline"></ion-icon>
    //         </div>
    //     `;
    //     $CONTENT_ICONS.innerHTML = html;
    // }

    // open_or_close = !open_or_close;
});

//funcion encargada de esconder y mostrar el menu
function toggle_buttons() {
    $MENU.classList.toggle("menu_show");
}
