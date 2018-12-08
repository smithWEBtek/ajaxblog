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
		$('div#comments-area').html(data);
	})
}

function listenForNewPostFormClick() {
	$('.ajax-new-post').on('click', function (e) {
		e.preventDefault();
		$('button#new-post').hide()
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
		}
	})
}
