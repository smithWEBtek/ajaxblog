Rails.application.routes.draw do
  resources :posts do
    resources :comments
	end

	get '/comments', to: 'comments#index'
	root 'posts#index'
end
