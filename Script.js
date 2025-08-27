const largeImg = document.querySelector('.large-img')
const smallImg = document.querySelectorAll('.small-img')

for(const elem of smallImg){
        elem.onclick = function (){
        largeImg.src = elem.src
    }
}

const loginForm = document.querySelector('#loginForm')
const regForm = document.querySelector('#regForm')
const indeCater = document.querySelector('#indecator')

function register() {
    regForm.style.transform = 'translateX(0px)'
    loginForm.style.transform = 'translateX(0px)'
    indeCater.style.transform = 'translateX(100px)'
}

function login() {
    regForm.style.transform = 'translateX(300px)'
    loginForm.style.transform = 'translateX(300px)'
    indeCater.style.transform = 'translateX(0px)'
}