/*global templates */

vanilla.listItem = (function (templates) {

  function render(props, done) {
    templates.load('/src/listItem/listItem.html', function (el) {
      el.textContent = props.data;
      el.addEventListener('click', props.onClick);

      if (done) {
        done(el);
      }
    });
  }

  return {
    render: render
  };

}(templates));
