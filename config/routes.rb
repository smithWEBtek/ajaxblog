Rails.application.routes.draw do
  resources :users
  resources :posts do
    resources :comments
	end

	get '/new_comment_form', to: 'posts#new_comment_form'

	get '/comments', to: 'comments#index'
	root 'posts#index'
end
