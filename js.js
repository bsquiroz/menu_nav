const $MENU = document.querySelector("#menu");
const $CLOSE = document.querySelector("#close");
const $MULTI = document.querySelector("#multi");
const $LINKS = document.querySelectorAll(".list li");

$LINKS.forEach((Element) => {
    Element.addEventListener("click", () => {
        $MENU.classList.toggle("menu_show");
    });
});

$MULTI.addEventListener("click", () => {
    $MENU.classList.toggle("menu_show");
});
