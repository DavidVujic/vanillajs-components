/*global templates */

vanilla.list = (function (templates, listItem) {

  function render(props, done) {

    templates.load('/src/list/list.html', function (el) {
      var data = props.data.slice();

      function addListItem() {
        var childProps = {
          data: data.shift(),
          onClick: props.onClick
        };

        listItem.render(childProps, function (child) {
          el.querySelector('ul').appendChild(child);
          next();
        });
      }

      function next() {
        if (data.length === 0) {
          done(el);
        } else {
          addListItem();
        }
      }

      next();
    });
  }

  return {
    render: render
  };

}(templates, vanilla.listItem));
