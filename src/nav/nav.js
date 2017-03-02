define(['templates', 'list/list'], function (templates, list) {

  function render(props, done) {
    templates.load('/src/nav/nav.html', null, function (el) {

      list.render(props, function (child) {
        el.appendChild(child);

        if (done) {
          done(el);
        }
      });

    });
  }

  return {
    render: render
  };
});
