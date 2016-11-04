(function (logger, nav, terminal, list) {

    function addLogger(done) {
        var logContainer = document.querySelector('.vanilla-terminal');
        logger.create(terminal, logContainer, done);
    }

    function addLeftNavigation(done) {
        var navContainer = document.querySelector('.left-menu');
        var navData = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];
        nav.create(list, navData, navContainer, logger, done);
    }

    addLogger(function () {
        addLeftNavigation(function () {
            logger.log('all components loaded');
        });
    });

}(logger, nav, vanilla.terminal, vanilla.list));
