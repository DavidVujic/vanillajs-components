(function (navigation, logView, events, Printer) {

    var printer;

    loadLogView(function () {
        loadLeftMenu();
    });

    function loadLogView(done) {
        logView.create('output: ', function (el) {
            var logContainer = el.querySelector('.log');
            printer = Printer(logContainer);

            document.querySelector('.vanilla-terminal').appendChild(el);
            done();
        });
    }

    function loadLeftMenu() {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        navigation.create(data, function (el) {
            events.on('click', el.querySelectorAll('li'), printer.print);
            document.querySelector('.left-menu').appendChild(el);
        });
    }

}(vanilla.nav, vanilla.logView, events, Printer));
