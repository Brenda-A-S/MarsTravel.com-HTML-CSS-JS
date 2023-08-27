export function toggleActive(event) {

    const element = event.currentTarget
    const controls = element.getAttribute("aria-controls")
    const id = document.getElementById(controls)

    element.classList.toggle("ativo")
    id.classList.toggle("ativo")
    const active = id.classList.contains("ativo")
    element.setAttribute("aria-expanded", active)
}

export function toggleMenu(element) {
    element.addEventListener("click", toggleActive)
}
