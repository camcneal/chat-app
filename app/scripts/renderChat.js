import $ from 'jquery';
import Message from './Message';
import user from './Session';
function renderChat() {
  
    let chat = $('.chat');
    let contentsOfChat = $(`
    <div class=" CC">
      <form>
        <label>Chitty Box:</label>
        <input class="text" type="text">
        <button class="add" type="submit" >Chitty Chat</button>
      </form>
      <h1>ChittyChat</h1>
      <ul class="ChittyChat"></ul>
    </div>
  `);

    chat.append(contentsOfChat);


    contentsOfChat.find('form').on('submit', function(e) {
        e.preventDefault();
        let chittybox = $('.text').val();
        $('.text').val('');
        let chat = new Message(user.userName,chittybox);
        // console.log(chat);
        chat.save();
        // $('.ChittyChat').append('<li>' +chittybox+ '</li>');

        // location.hash = 'Chat';
    });
}

export default renderChat;
// contentsOfLogin.on('submit', function(e){
//   e.preventDefault();
