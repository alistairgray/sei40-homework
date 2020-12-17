Rails.application.routes.draw do

  # like get '/' => pages#home
  root to: 'pages#home'

  # Login/Logout routes
  get '/login' => 'session#new' #showing the login form
  post '/login' => 'session#create' #form submits to here, performs login, redirects

  delete '/login' => 'session#destroy' #logout link goes here, perform logout, redirect

  # create all 7 CRUD routes for our users
  resources :users

  resources :mixtapes


end
