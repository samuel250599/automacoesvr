class TextProcessor
    def self.remove_text_after_markers(input_string, markers)
      regex = Regexp.union(markers.map { |m| Regexp.escape(m) })
      input_string.split(regex).first.strip
    end
  end
  
  Given('the string {string}') do |string|
    @input_string = string
  end
  
  And('the markers {string}') do |markers|
    @markers = markers.tr('[]', '').split(',').map(&:strip)
  end
  
  Then('the output should be {string}') do |expected_output|
    actual_output = TextProcessor.remove_text_after_markers(@input_string, @markers)
    expect(actual_output).to eq(expected_output)
  end
  