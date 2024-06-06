require 'httparty'
require 'json'

When('I request the VR API') do
  @response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
end

Then('the response should contain the key {string}') do |key|
  json_response = JSON.parse(@response.body)
  expect(json_response).to have_key(key)
end

And('I print a random type of establishment') do
  json_response = JSON.parse(@response.body)
  types = json_response['typeOfEstablishment']
  puts types.sample
end
