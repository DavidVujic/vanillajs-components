vanillaComponents.list = (function () {
    var templatePath = '/src/list/template.html';
    var placeholders = document.querySelectorAll('.vanillaComponents-list');

    function render() {
        vanillaComponents.loader.renderTemplate(templatePath, placeholders);
    }

    return {
        render: render
    }
}());
