#include <string>
#include <vector>

/*
 * Eden is full of beautiful islands...
 */

class Island {
 public:
  Island(std::string name, int length, int width,
          std::vector<std::string> features)
      : _name{name},
        _length{length},
        _width{width},
        _features{features} {}

  int area() { return calc_area(); }

 private:
  std::string _name;
  int _length;
  int _width;
  std::vector<std::string> _features;

  int calc_area() { return _length * _width; }
};

// ...one of them is named Elysian

int main() {
  std::string location = "Elysian";
  int length = 300, width = 350;
  std::vector<std::string> features { "Sunsets", "Beaches" };

  Island elysian{location, length, width, features};

  return 0;
}
