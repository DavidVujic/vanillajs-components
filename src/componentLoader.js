var componentLoader = (function () {

    function each(component, data, index, container, done) {
        component.create(data[index], function (item) {
            container.appendChild(item);

            index++;

            if (data.length <= index) {
                done(container);
                return;
            }

            each(component, data, index, container, done);
        });
    }

    return {
        each: each
    };
}());
