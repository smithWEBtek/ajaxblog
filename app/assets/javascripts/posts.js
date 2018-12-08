$(() => {
	listenForCommentsClick()
	listenForNewPostFormClick()
})

function listenForCommentsClick() {
	$('a.load_comments').on('click', function (e) {
		// 	alert('you clicked it');
		e.preventDefault();
		getPostComments(this.href);
	})
}

function getPostComments(url) {
	$.ajax({
		method: 'GET',
		url: url,
	}).done(function (data) {
		console.log("the data: ", data);
		$('div#comments-html-area').html(data); // data in div is replaced
		// $('div#comments-html-area').append(data); // data piles up!
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
