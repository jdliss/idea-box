Rails.application.routes.draw do
  root to: "ideas#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :ideas, only: [:create, :destroy]
      resources :upvotes, only: [:create]
      resources :downvotes, only: [:create]
    end
  end
end
