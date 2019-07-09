var button = document.querySelector('#button');
var index = 0;
var message = document.createElement('p');
var outputPlace = document.querySelector('.output-place');


button.addEventListener('click', function() {
	index++;
	if (index % 2 == 0) {
		message.textContent = 'Hello JavaScript!';
	} else {
		message.textContent = 'Hello World!';
	}
	
	var newMessage = message.cloneNode(true);
	outputPlace.appendChild(newMessage);
});
