var Counter = require('./Counter');
var enterTime = Date.now();

$('#counter').viewportChecker({
    offset: 0,
    callbackFunction: function (elem, action) {
        var visitTime = Math.round((Date.now() - enterTime) / 1000) + 3;
        $('#facts-visit-time').text(visitTime);

        Counter.init({
            el: elem,
            duration: 2000
        });
    }
});
