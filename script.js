const adoboLink = document.querySelector('.link1');
const pizzaLink = document.querySelector('.link2');
const riceLink = document.querySelector('.link3');
const topLink = document.querySelector('.top')
const backLink = document.querySelector('.back')






adoboLink.addEventListener('mouseover', adoboIn);
adoboLink.addEventListener('mouseout', adoboOut);

function adoboIn() {
    pizzaLink.style.opacity = '0'
    riceLink.style.opacity = '0'
}

function adoboOut() {
    pizzaLink.style.opacity = '1'
    riceLink.style.opacity = '1'
}


pizzaLink.addEventListener('mouseover', pizzaIn);
pizzaLink.addEventListener('mouseout', pizzaOut);

function pizzaIn() {
    adoboLink.style.opacity = '0'
    riceLink.style.opacity = '0'
}

function pizzaOut() {
    adoboLink.style.opacity = '1'
    riceLink.style.opacity = '1'
}


riceLink.addEventListener('mouseover', riceIn);
riceLink.addEventListener('mouseout', riceOut);

function riceIn() {
    pizzaLink.style.opacity = '0'
    adoboLink.style.opacity = '0'
}

function riceOut() {
    pizzaLink.style.opacity = '1'
    adoboLink.style.opacity = '1'
}