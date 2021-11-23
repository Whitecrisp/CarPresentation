const burgerBtn = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')/*toggle "переключатель" если класс есть-удаляет, если нет-добавляет */
    burgerBtn.classList.toggle('humburger-menu-active')
}

burgerBtn.addEventListener('click', () => toggleMenu())