/*
 * Eden is full of beautiful islands...
 */
class Island {
  constructor(props) {
    this.name = props.name;
    this.length = props.length;
    this.width = props.width;
    this.features = props.features;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.length * this.width;
  }
}

// ...one of them is named Elysian
export const elysian = new Island({
  name: 'Elysian',
  length: 300,
  width: 350,
  features: ['Sunsets', 'Beaches'],
});
