require 'net/http'
require 'json'

LIMIT = 365

def run!
  uri = URI('http://api.giphy.com/v1/gifs/search')
  params = {
    :limit => LIMIT,
    :rating => 'g',
    :q => 'cats kittens',
    :api_key => 'dc6zaTOxFJmzC',
  }
  uri.query = URI.encode_www_form(params)

  response = Net::HTTP.get_response(uri)
  if response.is_a?(Net::HTTPSuccess)
    response_body = JSON.parse(response.body, :symbolize_names => true)
    kittens = response_body[:data].map do | item |
      {
        :mp4_url => item[:images][:fixed_width][:mp4],
        :webp_url => item[:images][:fixed_width][:webp],
      }
    end

    puts "var kittens = #{JSON.pretty_generate(kittens)};"
  end

end

run! if __FILE__ == $PROGRAM_NAME
