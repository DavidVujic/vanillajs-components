(function (navigation, logView, events, Printer) {

    var printer = Printer();

    loadLeftMenu();
    loadMainView();
    loadLogView();

    function loadLeftMenu() {
        var data = [
            'You',
            'might',
            '(not)',
            'need',
            'a',
            'JavaScript',
            'framework'
        ]

        navigation.create(data, function (el) {
            events.on('click', el.querySelectorAll('li'), printer.print);
            document.querySelector('#left-menu').appendChild(el);
        });
    }

    function loadMainView() {
        var data = 'Main: ';

        logView.create(data, function (el) {
            printer.addTarget(el.querySelector('.log'));
            document.querySelector('#main').appendChild(el);
        });
    }

    function loadLogView() {
        var data = 'output: ';

        logView.create(data, function (el) {
            printer.addTarget(el.querySelector('.log'));
            document.querySelector('#vanilla-terminal').appendChild(el);
        });
    }

}(vanilla.nav, vanilla.logView, events, Printer));
