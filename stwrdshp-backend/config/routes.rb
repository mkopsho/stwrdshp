Rails.application.routes.draw do
  resources :parks
  resources :users, only: [:create]
  post "/likes", to: "lists#update"
  post "/login", to: "sessions#login"
  post "/logout", to: "sessions#logout"
end
