import $ from 'jquery';
function refresh (){

const getSettings = {
  url: 'http://tiny-za-server.herokuapp.com/collections/chittychats',
  type: 'GET',
  success: function (data){
    console.log(data.length);
  let messageData = data.map(function(message,i,arr){
      return ('<li><p>'+message.body+'</p><span>'+message.sender+'</span><span>'+message.timestamp+'</span></li>');
});
$('.ChittyChat').empty();
  $('.ChittyChat').append(messageData);
}
};
$.ajax(getSettings);
}

export default refresh ;
