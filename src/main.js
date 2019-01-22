import App from './app'

const root = document.getElementById('root')

const app = new App('main', 'mainContainer')

root.appendChild(app.element)
