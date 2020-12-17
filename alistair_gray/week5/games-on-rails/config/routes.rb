Rails.application.routes.draw do

  # Games / HomePage
  root :to => "pages#home"

  # Magic 8 Ball ----------------------------------

  # 1. Blank Form Route
  get '/magic' => 'magic#form'

  # 2. Form Submit
  get '/magic/ask' => 'magic#ask_question'

  # -----------------------------------------------

  # Secret Number ---------------------------------

  # 1. Number Select
  get '/secret' => 'secret#guess'

  # 2. Number Submit
  get '/secret/:guess' => 'secret#play'
  
  # -----------------------------------------------



end
