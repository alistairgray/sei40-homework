class DashboardController < ApplicationController
  def app
  end

  def uptime
    @up = `uptime`

    # How to get rails to respond with JSON instead of looking for the uptime template?
    response = {
      command: 'uptime',
      output: @up,
      random_numbers: [10, 23, 42]
    }
    # Gets the page to create a json page instead
    #render json: response

    respond_to do |format|
      format.html # if format is html, do the default thing, view the template
      format.json {render json: response} # Gets the page to create a json page instead
    end # respond_to

  end # uptime

  def cpu_hog
    hog = `ps xr`.split("\n").second
    date = `date`

    render json: {
      cpuHog: hog,
      currentDate: date
    }
  end # cpu_hog

  def dogs_index
    render json: Dog.all
  end # dogs_index

  def dogs_show
    render json: Dog.find(params[:id])
  end # dogs_show

  def dogs_search
    render json: Dog.where(name: params[:name])
  end # dogs_search

end
