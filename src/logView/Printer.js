function Printer() {
    var elements = [];

    function printText(text) {
        elements.forEach(function (element) {
            element.innerHTML += '<br/>' + text;
        });
    }

    function printEvent(e) {
        var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
        printText(message);
    }

    function addTarget(el) {
        elements.push(el);
    }

    function print(message) {
        if (typeof (message) === 'string') {
            printText(message);
            return;
        }

        printEvent(message);
    }

    function clear() {
        elements.forEach(function (element) {
            element.innerHTML = '';
        });
    }

    return {
        addTarget: addTarget,
        print: print,
        clear: clear
    };
}
