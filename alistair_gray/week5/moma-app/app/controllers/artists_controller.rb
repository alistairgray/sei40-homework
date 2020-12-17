# Artist CRUD: ####################################################
class ArtistsController < ApplicationController
# CREATE ----------------------------------------------------------
# 1. New - Blank Form
  def new
    @artist = Artist.new
  end # new

# 2. Create - form submits, update db and redirect
  def create
    Artist.create artist_params
    redirect_to artists_path
  end # create

# -----------------------------------------------------------------
# READ ------------------------------------------------------------
# 1. Index - all rows
  def index
    @artists = Artist.all
  end # index

# 2. Show - details about specific row by ID
  def show
    @artist = Artist.find params[:id]
  end # show

# -----------------------------------------------------------------
# UPDATE ----------------------------------------------------------
# 1. Edit - Blank Form
def edit
  @artist = Artist.find params[:id]
end # edit

# 2. Create - form submits, update db and redirect
def update
  artist = Artist.find params[:id]
  artist.update artist_params
  redirect_to artists_path(artist.id)
end # update

# -----------------------------------------------------------------
# DELETE ----------------------------------------------------------
# 1. Destroy - remove row from db, redirect to index
def destroy
  Artist.destroy params[:id]

  redirect_to artists_path
end # delete

  # Methods defined below the 'private' heading are for 'internal use' only by the actions of this controller;
  # i.e. they are NOT the handlers for routes defined in routes.rb
  private

  def artist_params
    params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :bio, :image)
  end # artist_params


# -----------------------------------------------------------------
end # ArtistController
