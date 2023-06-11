/*
 * Eden is full of beautiful islands...
 */

class Island {
  String name;
  int length, width;
  List<String> features;

  Island({this.name, this.length, this.width, this.features});

  int get area => this.calcArea();

  int calcArea() => this.length * this.width;
}

void main() {
  // ...one of them is named Elysian
  final Elysian = Island(
      name: 'Elysian',
      length: 300,
      width: 350,
      features: ['Sunsets', 'Beaches']);
}
