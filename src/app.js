(function (navigation, logView, events, Printer) {

    var printer = Printer();

    loadLeftMenu();
    loadLogView();

    function loadLeftMenu() {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        navigation.create(data, function (el) {
            events.on('click', el.querySelectorAll('li'), printer.print);
            document.querySelector('.left-menu').appendChild(el);
        });
    }

    function loadLogView() {
        var data = 'output: ';

        logView.create(data, function (el) {
            printer.setTarget(el.querySelector('.log'));
            document.querySelector('.vanilla-terminal').appendChild(el);
        });
    }

}(vanilla.nav, vanilla.logView, events, Printer));
