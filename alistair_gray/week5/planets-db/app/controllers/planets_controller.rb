class PlanetsController < ApplicationController

  # CREATE -----------------------------------------------------
    # 1. Blank form
    def new
      @planet = Planet.new
    end

    # TODO: make sure planet was actually created
    def create
      Planet.create(
        name: params[:planet][:name],
        mass: params[:planet][:mass],
        orbit: params[:planet][:orbit],
        moons: params[:planet][:moons],
        image_url: params[:planet][:image_url]
      )

      redirect_to planets_path
    end # create()


  # ------------------------------------------------------------

  # READ -------------------------------------------------------
  def index
    # AR query to get all planets, save into instance variable
    @planets = Planet.all
  end # index

  def show
    @planet = Planet.find params[:id]
  end # show
  # ------------------------------------------------------------

  # UPDATE -----------------------------------------------------
  def edit
    @planet = Planet.find params[:id]
  end # edit

  def update

    # 1. Query the DB to get the item we want to edit.
    # We have the id to lookup from the url '/planets/:id'
    # i.e it's in params[:id]

    planet = Planet.find params[:id]

    # 2. Call .update() pm that object, passing in the new values from the form submit
    # copied from :new .create method above
    # TODO: make sure the update was successful. i.e. did it fail because of validations?
    planet.update(
      name: params[:planet][:name],
      mass: params[:planet][:mass],
      orbit: params[:planet][:orbit],
      moons: params[:planet][:moons],
      image_url: params[:planet][:image_url]
    )
    redirect_to planet_path(planet.id) # "/planets/#{planet.id}"
  end # update

  # DELETE -------------------------------------------------------------------

  def destroy
    Planet.destroy params[:id]

    redirect_to planets_path
  end # destroy()

end # PlanetsController
