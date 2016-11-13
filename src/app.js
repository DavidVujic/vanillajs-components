define(['nav/nav', 'logView/logView', 'terminal/terminal', 'events', 'Printer'],
    function (navigation, logView, terminal, events, printer) {
        loadLeftMenu();
        loadMainView();
        loadLogView();

        function loadLeftMenu() {
            const data = [
                'You',
                'might',
                '(not)',
                'need',
                'a',
                'JavaScript',
                'framework'
            ];

            navigation.create(data, function (el) {
                events.on('click', el.querySelectorAll('li'), [printer.print, loadMainView]);
                document.querySelector('#left-menu').appendChild(el);
            });
        }

        function loadMainView(e) {
            const container = document.querySelector('#main');
            const data = {
                text: 'vanilla components'
            };

            if (e) {
                container.removeChild(container.firstChild);
                data.text = e.target.textContent;
            }

            terminal.create(data, function (el) {
                container.appendChild(el);
            });
        }

        function loadLogView() {
            const data = {
                text: 'events:'
            };

            logView.create(data, function (el) {

                printer.addTarget(el.querySelector('.cursor'));
                document.querySelector('#vanilla-terminal').appendChild(el);
            });
        }
    }
);
