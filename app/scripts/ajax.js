import $ from 'jquery';



const getSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/chittychats',
	type: 'GET',
	dataType: 'application/json',
};
const postSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/chittychats',
	type: 'POST',
	contentType: 'application/json',
	data: JSON.stringify(),
	success: (data) => {
		console.log(data);
	}
};
const putSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/chittychat',
	type: 'put',
	contentType: 'application/json',
	data: JSON.stringify({age: 600})
};
const deleteSettings = {
	url: `http://tiny-za-server.herokuapp.com/collections/chittychat/${id}`,
	type: 'delete'
};

$.ajax(postSettings);
