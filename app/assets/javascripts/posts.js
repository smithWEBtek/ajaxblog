$(() => {
	listenForCommentsClick()
	listenForNewPostFormClick()
})

function listenForCommentsClick() {
	$('a.load_comments').on('click', function (e) {
		// 	alert('you clicked it');
		e.preventDefault();
		getPostComments();
	})
}

function getPostComments() {
	$.ajax({
		method: 'GET',
		url: '/posts/1/comments'
	}).done(function (data) {
		console.log("the data: ", data);
		$('div#comments-div').html(data);
	})
}

function listenForNewPostFormClick() {
	$('button#new_post').on('click', function (e) {
		e.preventDefault();
		newPostForm();
	})
}

function newPostForm() {
	$.ajax({
		url: '/posts/new',
		method: 'get',
		success: function (response) {
			console.log("the response: ", response);
			$('div#new_post_form').html(response)
			debugger;

		}
	})
}


