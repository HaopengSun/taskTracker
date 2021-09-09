export class Point5 {
  constructor(private _x?: number, private _y?: number){}

  public draw(){
    console.log(this._x, this._y)
  }

}