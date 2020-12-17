class FruitsController < ApplicationController

  def index
    @fruits = Fruit.all.reverse
  end # index

  def create
    @fruit = Fruit.create fruit_params
    if @fruit.persisted?
      redirect_to fruit_path(@fruit.id)
    else
      render :new
    end # if persisted
  end # create


  private

  def fruit_params
    params.require(:fruit).permit(:name, :shelf_id)
  end # fruit_params

end # FruitsController
