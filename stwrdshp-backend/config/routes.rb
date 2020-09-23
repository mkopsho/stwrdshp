Rails.application.routes.draw do
  resources :parks
  resources :users, only: [:create]
  post "/login", to: "sessions#login"
  post "/logout", to: "sessions#logout"
  # get "/auto_login", to: "auth#auto_login"
  # get "/user_is_authed", to: "auth#user_is_authed"
end
