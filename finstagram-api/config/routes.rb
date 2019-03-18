Rails.application.routes.draw do
  namespace :api do
    
    get 'user', to: 'users#show', as: 'user_show'
    post 'signup', to: 'users#create', as: 'user_signup'
    post 'login', to: 'users#login', as: 'user_login'

    resources :posts, except: [:new, :edit]
  end
end
