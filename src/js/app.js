import '../scss/app.scss';
import $ from 'jquery';
import * as WOW from "es-module-lexer";

$(document).ready(function () {
    //JQuery code here
});

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

