(function (events, nav, logger, terminal) {

    function getContainer(selector) {
        return document.querySelector(selector);
    }

    function addLeftNavigation(done) {
        var data = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework']

        nav.create(data, function (el) {
            getContainer('.left-menu').appendChild(el);
            done();
        });
    }

    function addLogger(done) {
        var data = ['output: '];

        logger.createInstance(data, function (instance, el) {
            logger = instance;
            getContainer('.vanilla-terminal').appendChild(el);
            done();
        });
    }

    addLeftNavigation(function () {
        logger.log('navigation components loaded');
    });

    addLogger(function () {
        logger.log('logger components loaded');
    });

    var logger;

}(events, vanilla.nav, vanilla.logger, vanilla.terminal));
