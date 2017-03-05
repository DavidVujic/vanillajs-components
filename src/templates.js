import * as engine from '../lib/vendor/mustache.min.js';

const savedTemplates = {};

function getAbsolutePath() {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
}

function httpGet(path) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = getAbsolutePath() + path;

    request.open('GET', url, true);

    request.onload = function () {
      // keep function keyword, because of 'this'
      if (this.status >= 200 && this.status < 400) {
        resolve(this.response);
      } else {
        reject('We reached our target server, but it returned an error');
      }
    };

    request.onerror = () => {
      reject('There was a connection error of some sort');
    };

    request.send();
  });
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

function load(path, data) {

  if (savedTemplates.hasOwnProperty(path)) {
    return Promise.resolve(getSavedTemplate(path, data));
  }

  return httpGet(path)
    .then((template) => {
      saveTemplate(path, template);
      return getSavedTemplate(path, data);
    })
    .catch((error) => console.error(error));
}

export default load;
