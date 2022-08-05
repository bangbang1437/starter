import '../scss/app.scss';
import $ from 'jquery';

$(document).ready(function () {
    //JQuery code here
});

function changeBackground(curOffsetTop) {
    const header = document.querySelector("#header")
    const className = 'is_scrolled'
    if (curOffsetTop > 100)
        return header.classList.add(className)

    if (curOffsetTop < 100)
        return header.classList.remove(className)
}


document.addEventListener('scroll', function (e) {
    const curOffsetTop = window.pageYOffset
    changeBackground(curOffsetTop)
});