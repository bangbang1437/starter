import '../scss/app.scss';
import $ from 'jquery';
import * as WOW from "es-module-lexer";

/*Slider*/
$(document).ready(function () {
    var partnersImg = document.querySelectorAll(".rev");
    console.log(partnersImg);
    partnersImg.forEach((item, index) => {

        item.addEventListener("click", function (e) {
            partnersImg.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.toggle("active")
            comments_Changer(index)
        })
    })
});

const comments_Changer = (index) => {
    var comments = document.querySelectorAll(".item_rev");
    comments.forEach(item => {
        item.classList.remove("active")
    })
    var comments_item = comments[index]
    comments_item.classList.toggle("active")

}


/* Function can help use fixed header*/
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

/* Fixation all img . User cant move them */

$("img, a").on("dragstart", function (event) {
    event.preventDefault();
});





