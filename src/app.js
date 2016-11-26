/*global eventHelper, Printer */

(function (navigation, logView, terminal, events, Printer) {

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
        ];

        navigation.render(data, function (el) {
            events.on('click', el.querySelectorAll('li'), [printer.print, loadMainView]);
            document.querySelector('#left-menu').appendChild(el);
        });
    }

    function loadMainView(e) {
        var container = document.querySelector('#main');
        var data = {
            text: 'vanilla components'
        };

        if (e) {
            container.removeChild(container.firstChild);
            data.text = e.target.textContent;
        }

        terminal.render(data, function (el) {
            container.appendChild(el);
        });
    }

    function loadLogView() {
        var data = {
            text: 'events:'
        };

        logView.render(data, function (el) {
            printer.addTarget(el.querySelector('.cursor'));
            document.querySelector('#vanilla-terminal').appendChild(el);
        });
    }

}(vanilla.nav, vanilla.logView, vanilla.terminal, eventHelper, Printer));
