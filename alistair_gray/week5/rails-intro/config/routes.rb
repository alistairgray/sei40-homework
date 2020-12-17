Rails.application.routes.draw do

# VERB Path      controller methodname
  get '/hello' => 'pages#say_hello'
  get '/hello/:person' => 'pages#greet'
  get '/funny' => 'pages#haha'
  get '/calc/:first/:op/:second' => 'calculator#do_calculation'

  # Form-based calculator:

  # 1. Blank Form
  get '/calc' => 'calculator#form'
  # 2. Form submits to this route, does calc, shows results
  get '/calc/submit' => 'calculator#do_calculation'

end # all routes must go above this line
