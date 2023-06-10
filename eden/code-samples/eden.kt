/*
 * Eden is full of beautiful islands...
 */

class Island(
  val name: String,
  val length: Int,
  val width: Int,
  val features: Array<String>
) {
  val area: Int
    get() = this.calcArea()

  fun calcArea() =
    this.length * this.width 
}

// ...one of them is named Elysian

fun main() {
  Island(
    "Elysian",
    300,
    350,
    arrayOf("Sunsets", "Beaches")
  )
}