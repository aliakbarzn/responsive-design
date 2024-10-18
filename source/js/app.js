
let headerMneuBtn = document.querySelector('.header__icon')
let menuElem = document.querySelector('.menu')
let openCloseMenuFlag = false

function openCloseMenu() {

    if (openCloseMenuFlag === false) {

    menuElem.style.left = '0px'
    openCloseMenuFlag = true

    } else {

        menuElem.style.left = '-256px'
        openCloseMenuFlag = false

    }

}

headerMneuBtn.addEventListener('click', openCloseMenu)
