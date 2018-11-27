class CommentsController < ApplicationController

	def index
		if params["post_id"]
			@comments = Comment.all.where(post_id: params["post_id"])
			render partial: 'comments/post_comments', locals: { comments: @comments}
		else
			@comments = Comment.all
			render :index
		end
	end

	def show
		@comment = Comment.find(params["id"])
	end
	
	def new
		@comment = Comment.new
	end
	
	def create
		@comment = Comment.new(comment_params)
		if @comment.save
			redirect_to comments_path
		else
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
			params.require(:comment).permit(:title, :content)
		end
end
