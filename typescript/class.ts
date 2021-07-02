class Point {
  x: number;
  y: number;
  draw(){
    console.log(this.x, this.y)
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();