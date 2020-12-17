class PagesController < ApplicationController

  def say_hello
    puts "Go to say_hello method"
    # no more erb:hello
  end # say_hello

  def haha
    #render plain: 'LOL'
    @title = 'Smoking Dogs'
  end

  def greet
    @recipient = params[:person]
  end

end # PagesController
