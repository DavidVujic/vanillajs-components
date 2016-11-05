(function (events, nav, logger, terminal) {

    function getContainer(selector) {
        return document.querySelector(selector);
    }

    function addLeftNavigation(done) {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        nav.create(data, function (el) {
            getContainer('.left-menu').appendChild(el);

            events.on('click', el.querySelectorAll('li'), print);

            done();
        });
    }

    function addLogger(done) {
        var data = ['output: '];

        logger.create(data, function (el, returnedObj) {
            print = returnedObj.print;
            getContainer('.vanilla-terminal').appendChild(el);
            done();
        });
    }

    addLogger(function () {
        print('logger components loaded');

        addLeftNavigation(function () {
            print('navigation components loaded');
        });
    });

    var print;

}(events, vanilla.nav, vanilla.logger, vanilla.terminal));
