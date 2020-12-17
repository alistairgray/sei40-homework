class StockController < ApplicationController

  def form
  end

  def stock_lookup
    StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

    stock = StockQuote::Stock.quote params[:stock_code]

    @price = stock.latest_price
    @company = stock.company_name

  end

end
