class Services::Yelp
  UnhandledResponseError = Class.new(StandardError)

  def initialize(request_string)
    @request_string = request_string
  end

  def fetch_results
    response = HTTParty.get(@request_string, headers: self.headers)

    case response.code

    when 200..299
      return response
    else
      # IDENTIFY WHERE INVALID RESPONSES ARE HANDLED WHEN FRONTEND AND BACKEND ARE MARRIED
      return response
    end

  end

  def headers
    {
      "Authorization": "Bearer #{Rails.application.credentials[:yelp][:api_key]}"
    }
  end

end