Feature: Remove text after markers

Scenario: Remove text after markers in scenario 1
  Given the string "bananas, tomates # e ventiladores"
  And the markers ["#", "!"]
  Then the output should be "bananas, tomates"

Scenario: Remove text after markers in scenario 2
  Given the string "o rato roeu a roupa $ do rei % de roma"
  And the markers ["%", "!"]
  Then the output should be "o rato roeu a roupa $ do rei"

Scenario: Remove text after markers in scenario 3
  Given the string "the quick brown fox & jumped over * the lazy dog"
  And the markers ["&", "*", "%", "!"]
  Then the output should be "the quick brown fox"
