Rails.application.routes.draw do
  resources :parks, only: [:index, :show]
  resources :users, only: [:create, :show]
  post "/likes", to: "lists#update"
  delete "/likes", to: "lists#delete"
  post "/login", to: "sessions#login"
end
