const btns = document.querySelectorAll('.therapy-btn')
const counter = document.querySelector('.counter')
const messageBox = document.querySelector('#text-input')
const menuIcon = document.querySelector('.menu')

btns.forEach(btn => btn.addEventListener('click', open))
messageBox.addEventListener('input', counting)
menuIcon.addEventListener('click', navDisplay)

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

function navDisplay(e)
{
    if(this.children[0].getAttribute('class') === 'icon-menu')
    {
        this.children[0].setAttribute('class', 'icon-cancel')
        this.nextElementSibling.classList.add('display')
        this.nextElementSibling.classList.add('bg-nav')
        this.nextElementSibling.classList.remove('undisplay')
        for(let i = 0; i < this.nextElementSibling.children.length; i++)
        {
            this.nextElementSibling.children[i].style.animation = `display-nav ${i * 0.3}s forwards`
        }
    }
    else
    {
        this.children[0].setAttribute('class', 'icon-menu')
        this.nextElementSibling.classList.add('undisplay')
        this.nextElementSibling.classList.remove('display')
        this.nextElementSibling.classList.remove('bg-nav')
        for(let i = 0; i < this.nextElementSibling.children.length; i++)
        {
            this.nextElementSibling.children[i].style.animation = ``
        }
    }
    e.stopPropagation()
}