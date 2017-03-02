import * as engine from 'mustache';

const savedTemplates = {};

function getAbsolutePath() {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
}

function httpGet(path, onSuccess, onError) {
  const request = new XMLHttpRequest();
  const url = getAbsolutePath() + path;

  request.open('GET', url, true);

  request.onload = function () {
    // keep function keyword, because of 'this'
    if (this.status >= 200 && this.status < 400) {
      onSuccess(this.response);
    } else {
      onError('We reached our target server, but it returned an error');
    }
  };

  request.onerror = () => {
    onError('There was a connection error of some sort');
  };

  request.send();
}

function saveTemplate(path, template) {
  savedTemplates[path] = template;
}

function getSavedTemplate(key, data) {
  return toNode(savedTemplates[key], data);
}

function toNode(template, data) {
  const container = document.createElement('div');
  container.innerHTML = engine.render(template, data);
  return container.children[0];
}

function load(path, data, callback) {

  if (savedTemplates.hasOwnProperty(path)) {
    callback(getSavedTemplate(path, data));

    return;
  }

  httpGet(path, function (template) {
    saveTemplate(path, template);
    callback(getSavedTemplate(path, data));
  });
}

export default load;
