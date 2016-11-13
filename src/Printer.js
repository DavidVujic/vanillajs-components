const elements = [];

function printText(text) {
    elements.forEach((element) => element.innerHTML += '<br/>' + text);
}

function printEvent(e) {
    const message = `${e.type} : ${e.target.nodeName} : ${e.target.innerHTML}`;
    printText(message);
}

function addTarget(el) {
    elements.push(el);
}

function print(message) {
    if (typeof(message) === 'string') {
        printText(message);
        return;
    }

    printEvent(message);
}

function clear() {
    elements.forEach((element) => element.innerHTML = '');
}

export {addTarget, print, clear};
