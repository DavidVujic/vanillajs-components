(function (navigation, logView, terminal) {

  var printTargets = [];

  loadLeftMenu();
  loadMainView();
  loadLogView();

  function loadLeftMenu() {
    var props = {
      data: [
        'You',
        'might',
        '(not)',
        'need',
        'a',
        'JavaScript',
        'framework'
      ],
      onClick: function (e) {
        print(e);
        loadMainView(e);
      }
    };

    navigation.render(props, function (el) {
      document.querySelector('#left-menu').appendChild(el);
    });
  }

  function loadMainView(e) {
    var container = document.querySelector('#main');
    var data = {
      text: 'vanilla components'
    };

    if (e) {
      container.removeChild(container.firstChild);
      data.text = e.target.textContent;
    }

    terminal.render(data, function (el) {
      container.appendChild(el);
    });
  }

  function loadLogView() {
    var data = {
      text: 'events:'
    };

    logView.render(data, function (el) {
      printTargets.push(el.querySelector('.cursor'));
      document.querySelector('#vanilla-terminal').appendChild(el);
    });
  }

  function print(e) {
    var message = e.type + ' : ' + e.target.nodeName + ' : ' + e.target.innerHTML;
    printTargets.forEach(function (element) {
      element.innerHTML += '<br/>' + message;
    });
  }

}(vanilla.nav, vanilla.logView, vanilla.terminal));
