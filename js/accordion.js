const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

// btn.addEventListener('click', () => console.log('AGA'));

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]));
// }

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem, idx) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('feature__link_active')
                lists[idx].classList.toggle('hidden')
            } else {
                btnItem.classList.remove('feature__link_active')
                lists[idx].classList.add('hidden')
            }
        })
    })
})







// forEach !!!!!!!!!!!!!
// querySelectorAll
// querySelector