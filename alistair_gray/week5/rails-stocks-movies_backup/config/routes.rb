Rails.application.routes.draw do

# Stocks

# 1. Blank form route
get '/stocks' => 'stocks#form'

# 2. Form submit route
get '/stocks/lookup' => 'stocks#do_lookup'

# MovieDB

# 1. Blank form route
get '/movies' => 'movies#search_form'

# 2. Form submit route
get 'movies/lookup' =>  'movies#do_lookup'

end
