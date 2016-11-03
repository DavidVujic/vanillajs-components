var templates = (function () {
    var savedTemplates = {};

    function getAbsolutePath() {
        return window.location.protocol + '//' + window.location.host + window.location.pathname;
    }

    function httpGet(path, onSuccess, onError) {
        var request = new XMLHttpRequest();
        var url = getAbsolutePath() + path;

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

    function saveTemplate(path, template) {
        var container = document.createElement('div');
        container.innerHTML = template;
        savedTemplates[path] = container.children[0];
    }

    function getSavedTemplate(key) {
        return savedTemplates[key].cloneNode(true);
    }

    function getTemplate(path, callback) {

        if (savedTemplates.hasOwnProperty(path)) {
            callback(getSavedTemplate(path));

            return;
        }

        httpGet(path, function (template) {
            saveTemplate(path, template);
            callback(getSavedTemplate(path));
        });
    }
    return {
        get: getTemplate
    };
}());
