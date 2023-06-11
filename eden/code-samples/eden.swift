/*
* Eden is full of beautiful islands...
*/

class Island {
  var name: String
  var length: Int
  var width: Int
  var features: [String]
  
  init(name: String, length: Int, width: Int, features: [String]) {
    self.name = name
    self.length = length
    self.width = width
    self.features = features
  }
  
  var area: Int {
    self.calcArea()
  }
  
  func calcArea() -> Int {
    self.length * self.width
  }
}

// ...one of them is named Elysian

let elysian = Island(name: "Elysian", length: 300, width: 350, features: ["Sunsets", "Beaches"])
