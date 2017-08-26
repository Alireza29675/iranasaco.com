import './stylesheets/index.sass'
import App from './scripts/App'

window.$ = (query) => document.querySelector(query)
window.$$ = (query) => document.querySelectorAll(query)

window.app = new App