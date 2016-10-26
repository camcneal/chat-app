import $ from 'jquery';
import renderChat from './renderChat';
import refresh from './refresh';

function Message(sender,body) {
  'use strict';
  this.sender = sender;
  this.body = body;
  this.timestamp = new Date();
}

Message.prototype.save = function() {
  const postSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/chittychats',
	type: 'POST',
	contentType: 'application/json',
	data: JSON.stringify(this),
	success: (data) => {
    refresh();
		console.log(data);
	}
};
$.ajax(postSettings);
};


Message.prototype.delete = function() {
  const deleteSettings = {
  	url: `http://tiny-za-server.herokuapp.com/collections/chittychat/${id}`,
  	type: 'delete'
  };
};

export default Message;
