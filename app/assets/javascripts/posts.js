// document ready, listeners called
$(function () {
	// console.log('the posts.js file loaded');
	listenCommentsClick()
	listenNewPostFormClick()
	listenPostDetailsClick()
	// why do we NOT listen for this on document ready?
	// listenNewCommenClick()

})

// event listen for comment click
function listenCommentsClick() {
	$('a.load_comments').on('click', function (event) {
		event.preventDefault();

		getPostComments(this.href);
	})
}

// function called from event listen : listenCommentsClick()
function getPostComments(url) {
	$.ajax({
		method: 'GET',
		url: url,
	}).done(function (data) {
		console.log("the data: ", data);

		debugger
		// $('div#comments-html-area').html(data); // data in div is replaced // jquery way
		// $('div#comments-html-area').append(data); // data piles up in DOM on each click!
		document.getElementById('comments-html-area').innerHTML = data // javascript way
	})
}

// event listen for new post form
function listenNewPostFormClick() {
	$('.ajax-new-post').on('click', function (e) {
		e.preventDefault();
		$('button#new-post').hide()
		newPostForm();
	})
}

// function called from event listen : listenNewPostFormClick()
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

// event listen
function listenPostDetailsClick() {
	$('div#posts-index a').on('click', function (event) {
		event.preventDefault()
		console.log("this is the url: ", this.href);
		url = this.href
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		}).done(function (data) {

			debugger
			let post = new Post(data)
			let html = post.createPostHTML()
			// $('#post-details').html = html   // why doesn't this work?
			document.getElementById('post-details').innerHTML = html
			listenNewCommenClick()
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
	const comments = (
		this.comments.map((comment, index) => {
			return `<p id=${index}><em>${comment.content}</em></p>`
		}).join('')
	)

	return (`
		<div class="container">
			<div class="coloumns">
				<div class="coloumn is-3">
					<h3 class="title">${this.title}</h3>
					<p class="body">${this.content}</p>
				</div>
				<div class="column is-6">
					<fieldset>
						<strong>comments: </strong>
						<p>${comments}</p>
						<button id='add-comment'>add a comment</button>
					</fieldset>	
				</div>
			</div>
		</div>
	`)
}

// event listen for new comment click, to render new comment form
// why is this not in our event listeners at the top of this page?
// could we listen for it too soon, before the list of comments exists?
// or is it better to call this listen only after we know there are comments on the DOM?
function listenNewCommenClick() {
	$('button#add-comment').on('click', function (e) {
		// alert('you clicked add-comment');

		e.preventDefault();
		// load our new comment form
	})
}