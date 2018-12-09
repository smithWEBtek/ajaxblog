// document ready, listeners called
$(() => {
	listenerCommentsClick()
	listenerNewPostFormClick()
	listenerPostDetailsClick()
	// listenerNewCommenClick()   why not listen for this on document ready?
})

// event listener for comment click
function listenerCommentsClick() {
	$('a.load_comments').on('click', function (e) {
		// 	alert('you clicked it');
		e.preventDefault();
		getPostComments(this.href);
	})
}

// function called from event listener : listenerCommentsClick()
function getPostComments(url) {
	$.ajax({
		method: 'GET',
		url: url,
	}).done(function (data) {
		console.log("the data: ", data);
		// $('div#comments-html-area').html(data); // data in div is replaced // jquery way
		// $('div#comments-html-area').append(data); // data piles up in DOM on each click!
		document.getElementById('comments-html-area').innerHTML = data // javascript way
	})
}

// event listener for new post form
function listenerNewPostFormClick() {
	$('.ajax-new-post').on('click', function (e) {
		e.preventDefault();
		$('button#new-post').hide()
		newPostForm();
	})
}

// function called from event listener : listenerNewPostFormClick()
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
			listenerNewCommenClick()
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

// custom function on prototype of Post class
Post.prototype.createPostHTML = function () {
	console.log("this: ", this);
	const comments = (
		this.comments.map((comment, index) => {
			return `<p id=${index}><em>${comment.content}</em></p>`
		}).join('')
	)

	return (`
		<div>
			<h3>${this.title}</h3>
			<p>${this.content}</p>
			<fieldset>
				<strong>comments: </strong>
				<p>${comments}</p>
				<button id='add-comment'>add a comment</button>
			</fieldset>	
		</div>
	`)
}


// event listener for new comment click, to render new comment form
// why is this not in our event listeners at the top of this page?
// could we listen for it too soon, before the list of comments exists?
// or is it better to call this listener only after we know there are comments on the DOM?
function listenerNewCommenClick() {
	$('button#add-comment').on('click', function (e) {
		alert('you clicked add-comment');
		e.preventDefault();
		// load our new comment form

	})
}