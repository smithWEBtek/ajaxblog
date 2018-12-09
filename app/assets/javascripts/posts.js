// document ready, listeners called
$(() => {
	listenerCommentsClick()
	listenerNewPostFormClick()
	listenerPostDetailsClick()
})

// event listener
function listenerCommentsClick() {
	$('a.load_comments').on('click', function (e) {
		// 	alert('you clicked it');
		e.preventDefault();
		getPostComments(this.href);
	})
}

// function called from event listener
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

// event listener
function listenerNewPostFormClick() {
	$('.ajax-new-post').on('click', function (e) {
		e.preventDefault();
		$('button#new-post').hide()
		newPostForm();
	})
}

// function called from event listener
function newPostForm() {
	$.ajax({
		url: '/posts/new',
		method: 'get',
		success: function (response) {
			console.log("the response: ", response);
			$('div#new_post_form').html('--- this form--brought to you by AJAX' + response)
		}
	})
}

// event listener
function listenerPostDetailsClick() {
	$('div#posts-index a').on('click', function (event) {
		event.preventDefault()
		console.log(this.href);
		url = this.href
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		}).done(function (data) {
			console.log("data returned: ", data);

			let post = new Post(data)
			console.log("post js object created: ", post);

			let html = post.createPostHTML()
			console.log("html created:  ", html);

			// debugger
			// $('#post-details').html = html   // why doesn't this work??? dammit!!!
			document.getElementById('post-details').innerHTML = html
		})
	})
}

// JavaScript Object model
class Post {
	constructor(obj) {
		this.title = obj.title,
			this.content = obj.content,
			this.comments = obj.comments
	}
}

Post.prototype.createPostHTML = function () {
	console.log("this: ", this);
	const comments = (
		this.comments.map((comment, index) => {
			return `<p id=${index}><em>${comment.content}</em></p>`
		}).join('')
	)

	return (`<div>
			<h3>${this.title}</h3>
			<p>${this.content}</p>
			<p>${comments}</p>
		</div>`)
}