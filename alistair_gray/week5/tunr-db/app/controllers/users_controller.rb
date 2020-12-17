class UsersController < ApplicationController
  def new
    @user = User.new # make a blank User object to give to 'form_wth' in the template
  end

  def create
    @user = User.create user_params
    if @user.persisted?
      # log the user in automatically
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new # this keeps the entered details and pre-fills a new form
    end # persisted
  end # create

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end # class UsersController
