Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root 'doctors#index'

  resources :users
  resources :doctors do
    resources :appointments
  end
end


# root 'courses#index'
#     resources :users 
#     resources :courses do
#       resources :enrollments
#     end
