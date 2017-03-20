window.sr = ScrollReveal({
    origin: 'right',
    distance: '1500px',
    duration: 1000,
    opacity: 0,
    scale: 1,
    mobile: false
});

var $sequence = $('[class^="reveal-sequence-"]');

for (var i = 1; i <= $sequence.length; i++) {
    sr.reveal('.reveal-sequence-' + i, {
        delay: i * 100
    });
}

sr.reveal('.reveal-fade', {
    origin: 'bottom',
    distance: '0',
    duration: 1500,
});
