class Point1 {
  private x: number;
  y: number;

  // x, y are all optional
  constructor(x?: number, y?: number){
    this.x = x;
    this.y = y;
  }

  // by default it is public
  public draw(){
    console.log(this.x, this.y)
  }
}

let point1 = new Point1(1, 2);
point1.draw()
// point1.x is not accessible and in the intellisense

let point2 = new Point1();
point2.draw()

class Point2 {
  constructor(private x?: number, public y?: number){}

  public draw(){
    console.log(this.x, this.y)
  }
}

class Point3 {
  constructor(private x?: number, private y?: number){}

  public draw(){
    console.log(this.x, this.y)
  }

  get X(){
    return this.x
  }

  // set x with validation
  set X(value){
    if (value > 5) throw new Error('value cannot be smaller than 5')
    this.x = value
  }
}

let point3 = new Point3(1, 2)

// console.log(point3.getX())
console.log(point3.X)
point3.X = 10