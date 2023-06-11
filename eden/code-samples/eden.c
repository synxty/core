#include <stdlib.h>

struct Island {
  char *name;
  int length;
  int width;
  char *features[2];
};

int _calcArea(struct Island *i) { return i->length * i->width; }

int get_area(struct Island *i) { return _calcArea(i); }

int main() {
  struct Island i;

  /* Eden is full of beautiful islands, one of them is named Elysian */
  i.name = malloc(7 * sizeof(char));
  i.name = "Elysian";
  i.length = 300;
  i.width = 350;
  i.features[0] = "Sunsets";
  i.features[1] = "Beaches";

  get_area(&i);

  return 0;
}