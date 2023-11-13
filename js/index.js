// querySelector = seletor de elementos
const temaBnt = document.querySelector("#temaBtn")

// addEventListener = adiciona um evento
temaBnt.addEventListener('click', mudaTema)

function mudaTema() {
    let body = document.querySelector('body')
    let temaAtual = document.querySelector('#temaAtual')
    let imgLogo = document.querySelector('#imgLogo')

    if (temaBnt.checked) {
        body.setAttribute('data-bs-theme', 'light')
        imgLogo.setAttribute('src', '../imgs/logo/logoDark.svg')
        temaAtual.innerHTML = 'Claro'
    } else {
        body.setAttribute('data-bs-theme', 'dark')
        imgLogo.setAttribute('src', '../imgs/logo/logoWhite.svg')
        temaAtual.innerHTML = 'Escuro'
    }
}