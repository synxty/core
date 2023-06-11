=begin
Eden is full of beautiful islands...
=end

class Island
  def initialize(opts)
    @name = opts[:name]
    @length = opts[:length]
    @width = opts[:width]
    @features = opts[:features]
  end

  def area
    calcArea
  end

  private

  def calcArea
    @length * @width
  end
end

# ...one of them is named Elysian

elysian = Island.new(
  name: 'Elysian',
  length: 300,
  width: 350,
  features: %w[Sunsets Beaches]
)

puts elysian.area
