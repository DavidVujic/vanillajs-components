(function (logger, events, nav, terminal, list) {

    function addLogger(done) {
        var logContainer = document.querySelector('.vanilla-terminal');
        logger.create(terminal, logContainer, done);
    }

    function addLeftNavigation(done) {
        nav.create({
            component: list,
            data: ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'],
            container: document.querySelector('.left-menu'),
            callback: function (el) {
                events.on('click', el.childNodes, logger.logEvent);
            }
        }, done);
    }

    addLogger(function () {
        addLeftNavigation(function (el) {
            console.log(el);
            document.querySelector('.left-menu').appendChild(el);
            logger.log('all components loaded');
        });
    });

}(logger, events, vanilla.nav, vanilla.terminal, vanilla.list));
