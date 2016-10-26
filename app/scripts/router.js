import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './renderLogin';
import renderChat from './renderChat';
import refresh from './refresh';

let interval = '';

const routerSettings = {
  routes: {
    ''  : 'renderLogin',
    'Chat' : 'renderChat'

  },
  renderLogin: () => {
    window.clearInterval(interval);
    $('.chat').empty();
    renderLogin();
  },
  renderChat: () => {
  interval =window.setInterval(refresh,2000);
    $('.chat').empty();
    renderChat();
  }

};

const Router = Backbone.Router.extend(routerSettings);

var router = new Router();

export default router;
