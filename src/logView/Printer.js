function Printer(element) {

    function print(message) {
        if (typeof (message) === 'string') {
            printText(message);
            return;
        }

        printEvent(message);
    }

    function printText(text) {
        element.innerHTML += '<br/>' + text;
    }

    function printEvent(e) {
        var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
        printText(message);
    }

    function clear() {
        element.innerHTML = '';
    }

    return {
        print: print,
        clear: clear
    };
}
