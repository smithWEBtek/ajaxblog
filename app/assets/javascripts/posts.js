$(function () {
	console.log('posts.js is loaded ...')
	listenForClick()
	listenForNewPostFormClick()
});

function listenForClick() {
	$('button#posts-data').on('click', function (event) {
		event.preventDefault()
		getPosts()
	})
}

function getPosts() {
	$.ajax({
		url: 'http://localhost:3000/posts',
		method: 'get',
		dataType: 'json',
		success: function (data) {
			console.log("the data is: ", data)
			data.map(post => {
				const newPost = new Post(post)
				const newPostHtml = newPost.postHTML()
				document.getElementById('ajax-posts').innerHTML += newPostHtml
			})
		}
	})
}

function listenForNewPostFormClick() {
	$('button#ajax-new-post').on('click', function (event) {
		event.preventDefault()
		let newPostForm = Post.newPostForm()
		// $('div#new-post-form-div')
		document.querySelector('div#new-post-form-div').innerHTML = newPostForm
	})
}

class Post {
	constructor(obj) {
		this.id = obj.id
		this.title = obj.title
		this.content = obj.content
		this.comments = obj.comments
	}

	static newPostForm() {
		return (`
		<strong>New post comment form</strong>
			<form>
				<input id='post-title' type='text' name='title'></input><br>
				<input type='text' name='content'></input><br>
				<input type='submit' />
			</form>
		`)
	}
}

Post.prototype.postHTML = function () {
	let postComments = this.comments.map(comment => {
		return (`
			<p>${comment.content}</p>
		`)
	}).join('')

	return (`	
		<div class='post'>
			<h3>${this.title}</h3>
			<p>${this.content}</p>
			<p>${postComments}</p>
		</div>
	`)
}
