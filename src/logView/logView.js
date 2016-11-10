vanilla.logView = (function (terminal) {

    function create(data, done) {

        templates.load('/src/logView/logView.html', function (el) {

            terminal.create(data, function (child) {
                el.appendChild(child);

                if (done) {
                    done(el);
                }
            });
        });

    }

    return {
        create: create
    };

}(vanilla.terminal));
