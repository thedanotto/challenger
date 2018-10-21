Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :yelp_request, only: [:create]
    end
  end
end
