const menu = document.querySelector(".menu-bar-container");
const navigation = document.querySelector(".navigations");

menu.addEventListener("click", () => {
    menu.classList.toggle("change");
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
        
    } else {
        navigation.style.display = "flex";
    }
})

window.addEventListener("resize", () => {
    let w = window.innerWidth;

    if (w >= 768) {
        navigation.style.display = "flex";
    }else if (menu.classList.contains("change") ) {
        navigation.style.display = "flex";
    } else {
        navigation.style.display = "none";
    }
});