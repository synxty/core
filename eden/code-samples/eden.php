<?php
/*
 * Eden is full of beautiful islands...
 */
class Island {
  public string $name;
  public int $length;
  public int $width;
  public array $features;

  public function __construct(array $props) {
    $this->name = $props['name'];
    $this->length = $props['length'];
    $this->width = $props['width'];
    $this->features = $props['features'];
  }

  public function area(): int {
    return $this->calcArea();
  }

  private function calcArea(): int {
    return $this->length * $this->width;
  }
}

// ...one of them is named Elysian
$Elysian = new Island([
  'name' => 'Elysian',
  'length' => 300,
  'width' => 350,
  'features' => ['Sunsets', 'Beaches']
]);
?>
