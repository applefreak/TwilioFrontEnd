function queryFields() {
	var fields = {
		to: $('#numberToSend').val(),
		msg: $('#message').val()
	}
	return fields;
}

function resetFields() {
	$('#numberToSend').val('');
	$('#message').val('');
}

$('#sendButton').on('click', function() {
	$('#sendButton').attr("disabled", true);
	$.ajax({
		type: "POST",
		url: "api/send",
		data: queryFields(),
		success: function(res) {
			if (res.error) {
				$('.resultMessage').html('<strong>Error!</strong> ' + res.msg);
				$('#status').addClass('alert-danger').removeClass('hide');
			} else {
				$('.resultMessage').html('<strong>Success!</strong> Message is being ' + res.msg + '.');
				$('#status').addClass('alert-success').removeClass('hide');
			}
			$('#sendButton').attr("disabled", false);
		}
	});
});

$('#resetButton').on('click', function() {
	resetFields();
});


