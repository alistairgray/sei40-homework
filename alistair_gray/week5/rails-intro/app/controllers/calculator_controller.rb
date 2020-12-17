class CalculatorController < ApplicationController

  def do_calculation
    @first_num  = params[:first_num].to_i
    @operator   = params[:operator]
    @second_num = params[:second_num].to_i

    # if @operator == '+' then @output = @first_num + @second_num
    # elsif @operator == '-' then @output = @first_num - @second_num
    # elsif @operator == '*' then @output = @first_num * @second_num
    # elsif @operator == 'div' then @output = @first_num / @second_num
    # end

    @output = @first_num.send(@operator, @second_num)

  end # do_calculation

  def form

  end

end
