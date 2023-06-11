class Island:
  """
  Eden is full of beautiful islands...
  """
  def __init__(self, props):
    self.name = props['name']
    self.length = props['length']
    self.width = props['width']
    self.features = props['features']

  def get_area(self):
    return self.calc_area()

  def calc_area(self):
    return self.length * self.width

# ...one of them is named Elysian
Elysian = Island({
  'name': 'Transylvania',
  'length': 300,
  'width': 350,
  'features': ['Sunsets', 'Beaches']
})
