class CommentsController < ApplicationController

	def index
		if params["post_id"]
			@post = Post.find(params["post_id"])
			@comments = Comment.all.where(post_id: params["post_id"])
			render partial: 'comments/ajax_post_comments', locals: { comments: @comments, post: @post}
		else
			@comments = Comment.all
			render :index
		end
	end

	def show
		@comment = Comment.find(params["id"])
	end
	
	def new
		@post = Post.find(params["post_id"])
		@comment = @post.comments.build
	end
	
	def create
		@post = Post.find(params["post_id"])
		@comment = @post.comments.build
		if @comment.update(comment_params)
			respond_to do |format|
				format.html {redirect_to post_path(@post)}
				format.json {render json: @comment}
			end
		else
			flash.now[:message] = @comment.errors[:content][0]
			render :new
		end
	end
	
	def edit
		@comment = Comment.find(params["id"])
	end
	
	def update
		@comment = Comment.find(params["id"])
		if @comment.update(comment_params)
			redirect_to comment_path(@comment)
		else
			render :edit 
		end
	end
	
	def destroy
		@comment = Comment.find(params["id"])
		@comment.delete
		redirect_to comments_path
	end

	private
		def comment_params
			params.require(:comment).permit(:post_id, :content)
		end
end
