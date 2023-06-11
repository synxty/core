/* 
Eden is full of beautiful islands...
*/

#[derive(Debug)]
pub struct Island {
  name: String,
  length: u16,
  width: u16,
  features: Vec<String>,
}

impl Island {
  pub fn new(
    name: String,
    length: u16,
    width: u16,
    features: Vec<String>,
  ) -> Self {
    Island {
      name,
      length,
      width,
      features,
    }
  }

  pub fn area(&self) -> u16 {
    self.calc_area()
  }

  fn calc_area(&self) -> u16 {
    self.length * self.width
  }
}

/// ...one of them is named Elysian
fn main() {
  let elysian = Island::new(
    "Elysian".to_string(),
    300,
    350,
    vec!["Sunsets".to_string(), "Beaches".to_string()],
  );

  println!("{:?}", elysian);
}
