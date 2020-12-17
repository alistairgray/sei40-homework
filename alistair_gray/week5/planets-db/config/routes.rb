Rails.application.routes.draw do

  # Create --------------------------------------------------------

  # 1. Blank form
  get '/planets/new' => 'planets#new', as: 'new_planet'

  # 2. Form submits here, saves to DB, redirects
  post '/planets/' => 'planets#create'

  # Read ----------------------------------------------------------

  # 1. Index Page, i.e. list every row of the planets table
  get '/planets' => 'planets#index'
                    # use app/controlelrs/planets_controller.rb
                    # i.e. the class
                    #
                    #


  # 2. Show Page, i.e. details about one row by ID
  get '/planets/:id' => 'planets#show', as: 'planet'
                                      # Gives planet_path

  # Update---------------------------------------------------------

  # 1. Show (pre-filled form)
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'

  # 2. Form submits to here, do DB update, redirect
  post '/planets/:id' => 'planets#update'
                                           # edit_planet_path(id)

  # Delete --------------------------------------------------------
  get '/planets/:id/destroy' => 'planets#destroy', as: 'destroy_planet'


end # Rails
