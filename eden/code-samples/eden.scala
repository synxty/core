/*
 * Eden is full of beautiful islands...
 */
class Island(name: String, length: Int, width: Int, features: Array[String]) {
  def area(): Int = {
    calcArea()
  }

  def calcArea(): Int = {
    this.length * this.width
  }
}

// ...one of them is named Elysian
val elysian = new Island(name = "Elysian", length = 300, width = 350, features = Array("Sunsets", "Beaches"))
