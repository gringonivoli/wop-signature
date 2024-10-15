import { Point } from './point';

export class Line {

  constructor(private _fromPoint: Point, private _toPoint: Point) {}

  drawIn(canvasRenderingContext2D: CanvasRenderingContext2D) {
    canvasRenderingContext2D.beginPath();
    this._fromPoint.moveOn(canvasRenderingContext2D);
    this._toPoint.lineOn(canvasRenderingContext2D);
    canvasRenderingContext2D.closePath();
    canvasRenderingContext2D.stroke();
  }
}
