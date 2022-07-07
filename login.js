var login = document.querySelector('#login')
var senha = document.querySelector('#senha')
var botao = document.querySelector('#botao')
var msg = document.querySelector('#msg')
var btnCadastro = document.querySelector('#btnCadastro')
var btnVoltar = document.querySelector('#btnVoltar')


botao.addEventListener('click', e => {
    console.log('login:', login.value)
    console.log('senha:', senha.value)
    
    if (login.value == 'aline2000' && senha.value == 'lininha') {
        window.location.href = "https://outlook.live.com/mail/0/"
    } else {
        msg.innerHTML = 'login ou senha inválida'
    }   
}) 


btnCadastro.addEventListener('click', e => {
    window.location.href = "./cadastro.html"
})

btnVoltar.addEventListener('click', e => {
    window.location.href = "./index.html"
})