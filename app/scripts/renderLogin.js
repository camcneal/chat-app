import Backbone from 'backbone';
import $ from 'jquery';
import user from './Session';

function renderLogin () {
  let chat = $('.chat');
  let contentsOfLogin = $(`
    <form>
    <label >UserName:</label>
    <input class="username" type="text">
    <button type="submit" >Chitty Chat</button>
    </form>
  `);

  chat.append(contentsOfLogin);

  contentsOfLogin.on('submit', function(e){
    e.preventDefault();
let userName = $('.username').val();
user.userName = userName;
    location.hash = 'Chat';

    console.log('hi');
  });
}
export default renderLogin;
