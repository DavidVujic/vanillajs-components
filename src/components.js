var components = (function () {

    function add(component, data, container, done) {
        component.create(data, function (item) {
            container.appendChild(item);

            if (done) {
                done();
            }
        })
    }

    function each(component, data, index, container, done) {
        add(component, data[index], container, function () {
            index++;

            if (data.length <= index) {
                if (done) {
                    done(container);
                }

                return;
            }

            each(component, data, index, container, done);
        });
    }

    return {
        add: add,
        each: each
    };
}());
