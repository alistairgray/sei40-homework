require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

# Show all the SQL
ActiveRecord::Base.logger = Logger.new(STDOUT)

class Property < ActiveRecord::Base
  has_many :renters
end

class Renter < ActiveRecord::Base
  belongs_to :property
end

# require 'pry'; binding.pry

get '/' do
  erb :home
  # views/properties/index.erb
end


# Create
get '/properties/new' do
  erb :new
end

post '/properties' do
  Property.create(
    description: params[:description],
    street_name: params[:street_name],
    suburb: params[:suburb],
    postcode: params[:postcode],
    state: params[:state],
    image_url: params[:image_url]
  )

  redirect '/properties'
end

# Read
get '/properties' do
  @properties = Property.all
  erb :index
end

get '/properties/:id' do
  @property = Property.find params[:id]
  erb :show
end


# Update
get '/properties/:id/edit' do
  erb :edit
end

post '/properties/:id' do
  property = Property.find params[:id]
  property.update(
    description: params[:description],
    street_name: params[:street_name],
    suburb: params[:suburb],
    postcode: params[:postcode],
    state: params[:state],
    image_url: params[:image_url]
  )

  redirect "/properties/#{params[:id]}"
end

# Delete
get '/properties/:id/delete' do
  Property.destroy params[:id]
  redirect '/properties'
end
