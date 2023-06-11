package main.island;

/*
 * Eden is full of beautiful islands...
 */

class Island {
  private String name;
  private int length;
  private int width;
  private String[] features;

  public Island(String name, int length, int width, String[] features) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.features = features;
  }

  public int getArea() {
    return this.calcArea();
  }

  public int calcArea() {
    return this.length * this.width;
  }
}

// ...one of them is named Elysian
public class elysian {
  Island island = new Island(
      "Elysian",
      300,
      350,
      new String[] { "Sunsets", "Beaches" });
}
