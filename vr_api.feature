Feature: Validate VR API

Scenario: Validate JSON response contains key and print a random type of establishment
  When I request the VR API
  Then the response should contain the key "typeOfEstablishment"
  And I print a random type of establishment