import { toggleMenu } from "./toggleMenu.js";

const menuH = document.querySelector('#menu-hamburguer')

menuH.addEventListener("click", () => {
    toggleMenu(menuH)
})