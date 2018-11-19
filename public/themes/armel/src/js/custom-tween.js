const headerBurger = document.querySelector('.burger_menu')
const enterBurger = document.querySelector('#enter-menu')
const quitBurger = document.querySelector('#quit-menu')
const headerMenu = document.querySelector('.responsive_menu')
const headerLogo = document.querySelector('.header_logo')
const headerTitle = document.querySelector('#mobile_header_first')
const secretBox = document.querySelector('.box_small_screen')
const secretMenu = document.querySelector('#mobile_header_first')
const navResponsive = document.querySelector('#nav_responsive')


enterBurger.addEventListener('click', () => 
{
    //var tl = new TimelineMax();
    //console.log(tl)
    TweenMax.to(headerMenu, 0.45, {bottom:-30, display:'block', opacity: 1})
    TweenMax.to(secretBox, 0.4, {display:'block'})
    TweenMax.to(enterBurger, 0.1, {display:'none'})
    TweenMax.to(quitBurger, 1.5, {display:'block', delay:0.1})
    TweenMax.to(navResponsive, .4, {display:'block', opacity:1, delay:0.25})
})


quitBurger.addEventListener('click', () => 
{
    TweenMax.to(headerMenu, 0.35, {bottom:0, display:'none', opacity: 0})
    TweenMax.to(secretBox, 0.4, {display:'block'})
    TweenMax.to(quitBurger, 0.1, {display:'none'})
    TweenMax.to(enterBurger, 1.5, {display:'block', delay:0.1})  
    TweenMax.to(navResponsive, .4, {display:'none', opacity:0, delay:0.25})
})

const largeMedia = window.matchMedia( "(min-width: 1024px)" )


window.onresize = function()
{
    TweenMax.to(headerMenu, .1, {bottom:0, display:'none', opacity: 0})
    TweenMax.to(secretBox, .1, {display:'block'})
    TweenMax.to(quitBurger, .1, {display:'none'})
    TweenMax.to(enterBurger, .1, {display:'block'})  
    TweenMax.to(navResponsive, .1, {display:'none', opacity:0})
}