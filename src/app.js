(function (logger, nav, terminal, list) {

    var logContainer = document.querySelector('.vanilla-terminal');
    logger.create(terminal, logContainer);

    var navContainer = document.querySelector('.left-menu');
    var navData = ['You', 'might', '(not)', 'need', 'a', 'JavaScript', 'framework'];
    nav.create(list, navData, navContainer);

}(logger, nav, vanilla.terminal, vanilla.list));
