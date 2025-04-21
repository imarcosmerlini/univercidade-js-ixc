// Classes
class Polygon {
  constructor(array) {
    this.array = array;
  }

  perimeter() {
    let result = 0;
    for (let i = 0; i < this.array.length; i++) {
      result += this.array[i];
    }
    return result;
  }
}

// Inheritance
Rectangle.prototype.area = function() {
  return this.w * this.h;
}

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}
