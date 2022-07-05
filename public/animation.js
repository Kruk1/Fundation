const btns = document.querySelectorAll('.therapy-btn')
const counter = document.querySelector('.counter')
const messageBox = document.querySelector('#text-input')

btns.forEach(btn => btn.addEventListener('click', open))
messageBox.addEventListener('input', counting)

function open(e)
{
    this.nextElementSibling.classList.toggle('open')
    this.nextElementSibling.classList.toggle('display')
    this.nextElementSibling.classList.toggle('undisplay')
    this.classList.toggle('move-up')
    this.classList.toggle('move-out')
    e.stopPropagation()
}

function counting(e)
{
    let maxlength = 300
    counter.textContent = maxlength - this.value.length
    e.stopPropagation()
}