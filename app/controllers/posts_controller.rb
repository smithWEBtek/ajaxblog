class PostsController < ApplicationController

	def index
		@posts = Post.all
		respond_to do |f|
			f.html {render :index}
			f.json {render json: @posts}
		end
	end

	def show
		@post = Post.find(params["id"])
		respond_to do |f|
			f.html {render :show}
			f.json {render json: @post }
		end
	end
	
	def new
		@post = Post.new
		respond_to do |f|
			f.html {render :new, layout: false}
			f.json {render json: @post}
		end
	end
	
	def create
		@post = Post.new(post_params)
		if @post.save
			respond_to do |f|
				f.html {redirect_to posts_path}
				f.json {render json: @posts}
			end
		else
			render :new
		end
	end
	
	def edit
		@post = Post.find(params["id"])
		respond_to do |f|
			# f.html {render :new, layout: false}
			f.html {render :edit}
			f.json {render json: @post}
		end
	end
	
	def update
		@post = Post.find(params["id"])
		if @post.update(post_params)
			redirect_to post_path(@post)
		else
			render :edit 
		end
	end
	
	def destroy
		@post = Post.find(params["id"])
		@post.delete
		redirect_to posts_path
	end

	private
		def post_params
			params.require(:post).permit(:title, :content)
		end
end
