'use strict';

$(document).ready(function() {
    //hamburger Toggle
    $('.humbarger2').click(function(event) {
        $('.menu-list2').slideToggle(500);
        event.preventDefault();

        $('.menu-list2 li a').click(function(event) {
            if ($(window).width() < 1131) {
                $('.menu-list2').slideUp(500);
                event.preventDefault();
            }
        });
    });
});
// aos
AOS.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
});
// ....
AOS.init({
    duration: 1200,
});

$('.active').delay(5000).animate({ opacity: '1' }, 5000);
