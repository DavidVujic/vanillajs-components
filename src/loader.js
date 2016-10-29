vanillaComponents.loader = (function () {
    function get(url, onSuccess, onError) {
        var request = new XMLHttpRequest();

        request.open('GET', url, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                onSuccess(this.response);
            } else {
                onError('We reached our target server, but it returned an error');
            }
        };

        request.onerror = function () {
            onError('There was a connection error of some sort');
        };

        request.send();
    }

    function renderTemplate(templatePath, placeholders) {
        vanillaComponents.loader.get(templatePath, function (template) {
            var i;

            for (i = 0; i < placeholders.length; i += 1) {
                placeholders[i].innerHTML = template;
            }
        });
    }

    return {
        get: get,
        renderTemplate: renderTemplate
    };
}());
