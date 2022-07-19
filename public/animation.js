const btns = document.querySelectorAll('.therapy-btn')
const counter = document.querySelector('.counter')
const messageBox = document.querySelector('#text-input')
const menuIcon = document.querySelector('.menu')
const failedErr = document.querySelector('.failedInfo')
const succesMail = document.querySelector('.succesInfo')
const exitBtn = document.querySelector('.exit-btn')
const navHeight = document.querySelector('nav').offsetHeight

document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + 'px')

btns.forEach(btn => btn.addEventListener('click', open))
messageBox.addEventListener('input', counting)
menuIcon.addEventListener('click', navDisplay)
document.body.addEventListener('click', hideNav)
window.addEventListener('scroll', smoothSections)
if(failedErr || succesMail)
{
    window.addEventListener('load', scrollContact)
    exitBtn.addEventListener('click', undisplayPopUp)
}

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

function hideNav(e)
{
    if(window.innerWidth <= 840)
    {
        menuIcon.children[0].setAttribute('class', 'icon-menu')
        menuIcon.nextElementSibling.classList.add('undisplay')
        menuIcon.nextElementSibling.classList.remove('display')
        menuIcon.nextElementSibling.classList.remove('bg-nav')
        for(let i = 0; i < menuIcon.nextElementSibling.children.length; i++)
        {
            menuIcon.nextElementSibling.children[i].style.animation = ``
        }
    }
    e.stopPropagation()
}

function scrollContact()
{
    const contactSection = document.querySelector('.contact')
    window.scrollTo(0, contactSection.offsetTop)
}

function undisplayPopUp()
{
    this.parentElement.classList.add('undisplay-pop-up')
}

function smoothSections(e)
{
    const about = document.querySelector('.about-container')
    const news = document.querySelector('.news-container')
    const therapy = document.querySelector('.therapy-container')
    const team = document.querySelector('.team-container')
    const contact = document.querySelector('.contact-container')
    if(about.parentElement.offsetTop - window.innerHeight <= window.scrollY)
        about.classList.add('smooth-section')
    if(news.parentElement.offsetTop - window.innerHeight <= window.scrollY)
        news.classList.add('smooth-section')
    if(therapy.parentElement.offsetTop - window.innerHeight <= window.scrollY)
        therapy.classList.add('smooth-section')
    if(team.parentElement.offsetTop - window.innerHeight <= window.scrollY)
        team.classList.add('smooth-section')
    if(contact.parentElement.offsetTop - window.innerHeight <= window.scrollY)
        contact.classList.add('smooth-section')
}