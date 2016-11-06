function Printer() {
    var element = {};

    function printText(text) {
        element.innerHTML += '<br/>' + text;
    }

    function printEvent(e) {
        var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
        printText(message);
    }

    function setTarget(el) {
        element = el;
    }

    function print(message) {
        if (typeof (message) === 'string') {
            printText(message);
            return;
        }

        printEvent(message);
    }

    function clear() {
        element.innerHTML = '';
    }

    return {
        setTarget: setTarget,
        print: print,
        clear: clear
    };
}
