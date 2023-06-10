/*
* Eden is full of beautiful islands...
*/

public class Island
{
  public string Name { get; private set; }
  public int Length { get; private set; }
  public int Width { get; private set; }
  public string[] Features { get; private set; }

  public Island(string name, int length, int width, string[] features)
  {
    Name = name;
    Length = length;
    Width = width;
    Features = features;
  }

  public int Area()
  {
    return calcArea();
  }

  private int calcArea()
  {
    return Length * Width;
  }
}
class Program
{
  static void Main(string[] args)
  {
    // ...one of them is named Elysian

    var elysian = new Island(
      "Elysian",
      300,
      350,
      new string[] { "Sunsets", "Beaches" }
    );
  }
}
