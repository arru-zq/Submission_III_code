/* eslint-disable import/no-extraneous-dependencies */
// Done
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Done
const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

// skip to content
window.addEventListener('load', () => {
    app.renderPage();
    // Skip to link auto
    const mainContent = document.querySelector('#mainContent');
    const skipToTheLink = document.querySelector('.skip-link');
    skipToTheLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.scrollIntoView({ behavior: 'auto' });
        skipToTheLink.blur();
    });
    swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
