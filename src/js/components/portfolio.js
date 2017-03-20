// When link in portfolio item gets focus, make the caption visible
// (navigation using Tab)

$('.portfolio').on('focus', 'a', function () {
    $(this).closest('.portfolio-item').addClass('is-active');
});

$('.portfolio').on('blur', 'a', function () {
    $(this).closest('.portfolio-item').removeClass('is-active');
});
