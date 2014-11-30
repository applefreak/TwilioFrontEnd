function queryFields() {
	var fields = {
		number: $('#numberToSend').val(),
		message: $('#message').val()
	}

	return fields;
}

function resetFields() {
	$('#numberToSend').val('');
	$('#message').val('');
}

$('#sendButton').on('click', function() {
	console.log(queryFields());
});

$('#resetButton').on('click', function() {
	resetFields();
});


