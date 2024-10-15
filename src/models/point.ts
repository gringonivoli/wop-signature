export class Point {

  constructor(private _x: number, private _y: number) {
    Point.validate_numbers(this._x);
    Point.validate_numbers(this._y);
  }

  static validate_numbers(aNumber: number) {
    if (!(typeof aNumber === 'number')) {
      throw new RangeError(`X & Y must be integers not ${aNumber}`);
    }
  }

  subtract(subtrahend: Point) {
    return new Point(this.x() - subtrahend.x(), this.y() - subtrahend.y());
  }

  x(): number {
    return this._x;
  }

  y(): number {
    return this._y;
  }

  equals(aPoint: Point) {
    return this.x() === aPoint.x() && this.y() === aPoint.y();
  }

  moveOn(canvasRenderingContext2D: CanvasRenderingContext2D) {
    canvasRenderingContext2D.moveTo(this.x(), this.y());
  }

  lineOn(canvasRenderingContext2D: CanvasRenderingContext2D) {
    canvasRenderingContext2D.lineTo(this.x(), this.y());
  }
}
