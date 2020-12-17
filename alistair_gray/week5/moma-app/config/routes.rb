Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Artist CRUD: ####################################################

  # CREATE ----------------------------------------------------------
  # 1. New - Blank Form
  get '/artists/new' => 'artists#new', as: 'new_artist'

  # 2. Create - form submits, update db and redirect
  post '/artists' => 'artists#create'

  # -----------------------------------------------------------------
  # READ ------------------------------------------------------------
  # 1. Index - all rows
  get '/artists' => 'artists#index'

  # 2. Show - details about specific row by ID
  get '/artists/:id' => 'artists#show', as: 'artist'

  # -----------------------------------------------------------------
  # UPDATE ----------------------------------------------------------
  # 1. Edit - Blank Form
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  # 2. Update - form submits, update db and redirect
  # form_with helper requires the use of patch instead of post
  patch '/artists/:id' => 'artists#update'

  # -----------------------------------------------------------------
  # DELETE ----------------------------------------------------------
  # 1. Destroy - remove row from db, redirect to index
  delete 'artists/:id' => 'artists#destroy', as: 'delete_artist'

  # -----------------------------------------------------------------
  # Works CRUD routes
  resources :works


end # routes
