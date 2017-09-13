import './stylesheets/index.sass'
import App from './scripts/App'

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.onload = function () {
    $('body').classList.add('loading-finished');
    setTimeout(() => { $('body > .loading').remove() }, 1000)
};

window.app = new App;