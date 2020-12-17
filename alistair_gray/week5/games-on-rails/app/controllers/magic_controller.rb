class MagicController < ApplicationController

  def form
  end

  def ask_question

    @question = params[:question]

    @answers = [
      'It is certain',
      'Most likely',
      'Ask again later',
      'Outlook not so good'
    ]

    @answer = @answers.sample

  end # ask_question()

end # MagicController
