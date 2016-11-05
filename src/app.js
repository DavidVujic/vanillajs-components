(function (navigation, logger, events) {

    var print;

    loadLogger(function (loggerElement) {
        document.querySelector('.vanilla-terminal').appendChild(loggerElement);

        loadLeftNav(function (navElement) {
            document.querySelector('.left-menu').appendChild(navElement);
        });
    });

    function loadLogger(done) {
        var data = ['output: '];
        logger.create(data, function (el, returnedObj) {
            print = returnedObj.print;
            done(el);
        });
    }

    function loadLeftNav(done) {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']
        navigation.create(data, function (el) {
            events.on('click', el.querySelectorAll('li'), print);
            done(el);
        });
    }

}(vanilla.nav, vanilla.logger, events));
