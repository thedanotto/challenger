class Api::V1::YelpRequestController < ApplicationController
  def create
    yelp = Services::Yelp.new(yelp_request_params["url"])
    render json: yelp.fetch_results
  end


  private
  def yelp_request_params
    params.require(:yelp_request).permit(:url)
  end
end
