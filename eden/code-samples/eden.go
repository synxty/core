package main

import "fmt"

/*
  Eden is full of beautiful islands...
*/
type Island struct {
  Name     string
  Length   int
  Width    int
  Features []string
}

func (i *Island) Area() int {
  return i.calcArea()
}

func (i *Island) calcArea() int {
  return i.Length * i.Width 
}

// ...one of them is named Elysian

func main() {
  elysian := &Island{
    Name:     "Elysian",
    Length:   300,
    Width:    350,
    Features: []string{"Sunsets", "Beaches"},
  }

  fmt.Println(elysian.Area())
}
