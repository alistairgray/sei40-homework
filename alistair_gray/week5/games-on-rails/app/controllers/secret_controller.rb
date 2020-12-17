class SecretController < ApplicationController

  def guess
    @guess = params[:guess]
  end

  def play
    @numbers = [0,1,2,3,4,5,6,7,8,9,10]
    @chosen_number = @numbers.sample
  when @guess == @chosen_number  

  end


end # SecretController
