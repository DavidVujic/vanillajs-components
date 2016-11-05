(function (navigation, logger, events, Printer) {

    var printer;

    loadLogger(function (loggerElement) {
        printer = Printer(loggerElement.querySelector('.log'));
        document.querySelector('.vanilla-terminal').appendChild(loggerElement);

        loadLeftNav(function (navElement) {
            document.querySelector('.left-menu').appendChild(navElement);
        });
    });

    function loadLogger(done) {
        var data = ['output: '];

        logger.create(data, function (el) {
            done(el);
        });
    }

    function loadLeftNav(done) {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        navigation.create(data, function (el) {
            events.on('click', el.querySelectorAll('li'), printer.print);
            done(el);
        });
    }

}(vanilla.nav, vanilla.logger, events, Printer));
