import './stylesheets/index.sass'
import App from './scripts/App'

window.onload = function () {
    document.body.classList.add('loading-finished')
};

window.$ = (query) => document.querySelector(query);
window.$$ = (query) => document.querySelectorAll(query);

window.app = new App;