$('.skills-meter-value').viewportChecker({
    offset: 0,
    callbackFunction: function (elem, action) {
        elem.animate({
            width: elem.attr('data-value') + '%'
        }, 1000);
    }
});
