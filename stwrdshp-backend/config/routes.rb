Rails.application.routes.draw do
  resources :parks
  resources :users, only: [:index, :create]
  post "/login", to: "users#login"
  # get "/auto_login", to: "auth#auto_login"
  # get "/user_is_authed", to: "auth#user_is_authed"
end
