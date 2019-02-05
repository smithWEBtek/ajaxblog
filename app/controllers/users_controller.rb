class UsersController < ApplicationController
 
	def index
		@users = User.all
		respond_to do |f|
			f.html {render :index} 
			f.json {render json: @users}
		end
	end
	
	def show
		@user = User.find(params["id"])
		respond_to do |f|
			f.html {render :show} 
			f.json {render json: @user}
		end
	end
	
	def new
		@post = Post.find(params["post_id"])
		@user = @post.users.build
	end
	
	def create
		@post = Post.find(params["post_id"])
		@user = @post.users.build
		if @user.update(user_params)
			respond_to do |format|
				format.html {redirect_to post_path(@post)}
				format.json {render json: @user}
			end
		else
			flash.now[:message] = @user.errors[:content][0]
			render :new
		end
	end
	
	def edit
		@user = User.find(params["id"])
	end
	
	def update
		@user = User.find(params["id"])
		if @user.update(user_params)
			redirect_to user_path(@user)
		else
			render :edit 
		end
	end
	
	def destroy
		@user = User.find(params["id"])
		@user.delete
		redirect_to users_path
	end

	private
		def user_params
			params.require(:user).permit(:post_id, :content)
		end
end

