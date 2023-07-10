/*
 * Eden is full of beautiful islands...
 */

interface IslandProps {
  name: string;
  length: number;
  width: number;
  features: Features;
}

type Features = string[];

export class Island {
  name: string;
  length: number;
  width: number;
  features: string[];

  constructor(props: IslandProps) {
    this.name = props.name;
    this.length = props.length;
    this.width = props.width;
    this.features = props.features;
  }

  get area(): number {
    return this.calcArea();
  }

  calcArea(): number {
    return this.length * this.width;
  }
}

// ...one of them is named Elysian

const elysian = new Island({
  name: 'Elysian',
  length: 300,
  width: 350,
  features: ['Sunsets', 'Beaches'],
});

let elysianArea = `Elysian Area: ${elysian.area}`;
