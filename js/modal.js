const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {  /*Открытие модального окна (сбрасывание класса hidden с верстки модального окна) */
    modal.classList.remove('hidden')
})
modal.addEventListener('click', (event) => {  /*target - эл-т на который мы нажимаем */
    const target = event.target

    if(target.classList.contains('overlay') || target.classList.contains('modal__close')){  /*Если в нажатом эл-те есть класс overlay или modal__close то выполняется вложенное */
        modal.classList.add('hidden')
    }
})