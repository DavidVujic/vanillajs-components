(function (navigation, logView, events, Printer) {

    var printer;

    loadLogView(function (logViewElement) {
        printer = Printer(logViewElement.querySelector('.log'));
        document.querySelector('.vanilla-terminal').appendChild(logViewElement);

        loadLeftNav(function (navElement) {
            document.querySelector('.left-menu').appendChild(navElement);
        });
    });

    function loadLogView(done) {
        var data = ['output: '];

        logView.create(data, function (el) {
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

}(vanilla.nav, vanilla.logView, events, Printer));
