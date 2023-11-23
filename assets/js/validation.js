const emailType = RegExp(/^.+@[A-Za-z0-9\-]+(\.[A-Za-z]{1,}){1,}$/g)

let efield = document.querySelector('.email-input')
let errMsg = document.querySelector('.validation-text')
let formDiv = document.querySelector('.form-container')
let msgDiv = document.querySelector('.confirm-container')
let formBtn = document.querySelector('.mail-form')
let emailText = document.querySelector('.user-email')
let dismissBtn = document.querySelector('.dismiss-btn')

let userEmail

formBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!efield.value.match(emailType)) {
        errMsg.style.display = 'flex'
        efield.setCustomValidity("invalid")
    } else {
        userEmail = efield.value
        emailText.innerText = userEmail
        formDiv.style.display = 'none'
        msgDiv.style.display = 'flex'
    }
})
efield.addEventListener('input', ()=> {
    if(efield.value.match(emailType) || !efield.value) {
        efield.setCustomValidity("")
        errMsg.style.display = 'none'
    } else {
        efield.setCustomValidity("invalid")
        errMsg.style.display = 'flex'
    }
})

dismissBtn.addEventListener('click', () => {
    efield.value = ''
    userEmail = ''
    formDiv.style.display = 'flex'
    msgDiv.style.display = 'none'

})