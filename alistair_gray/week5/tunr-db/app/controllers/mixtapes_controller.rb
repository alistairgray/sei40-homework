class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def new
    @mixtape = Mixtape.new
  end

  def create
    # set the user id to the mixtape from @current_user but only if the user is logged in
    # need to create a check to make sure that they are logged in

    mixtape = Mixtape.create mixtape_params
    mixtape.user_id = @current_user.id # this mixtape belongs to the logged in user
    mixtape.save # do db insert

    #1.
    # mixtape.user_id = @current_user.id
    # mixtape.save
    #2.
    # mixtape.update user_id: @current_user
    #3.
    # @current_user.mixtapes << mixtape

    redirect_to mixtape_path(mixtape.id)
  end

  def index
  end

  def show
    @mixtape = Mixtape.find params[:id]
  end

  def edit
    @mixtape = Mixtape.find params[:id]
    redirect_to login_path unless @mixtape.user_id == @current_user.id
  end

  def update
    mixtape = Mixtape.create mixtape_params

    if mixtape.user_id != @current_user.id
      redirect_to login_path
      return
    end #if
    
    mixtape.update mixtape_params
    redirect_to mixtape_path(mixtape.id)
  end

  def destroy
  end

  private

  def mixtape_params
    params.require(:mixtape).permit(:title, :image)
  end
end
