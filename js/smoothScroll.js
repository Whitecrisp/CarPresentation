const linksHead = document.querySelectorAll('.menu-list__link') /*получение эл-тов с страницы по их классу*/
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const ID = event.target.getAttribute('href').substr(1) /*substr(n) обрезает символ слева на n шагов вправо */

        console.log(ID);

        document.getElementById(ID).scrollIntoView({  /*ХУЙ ОНО РАБОТАЕТ */
            behavior: 'smooth',
            block: 'start'
        })
    })
})