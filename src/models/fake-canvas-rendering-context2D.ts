export class FakeCanvasRenderingContext2D {

  private _x: number = 0;
  private _y: number = 0;

  constructor(public canvas: HTMLCanvasElement) {}

  stroke() {}
  beginPath() {}
  closePath() {}

  moveTo(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  movedTo() {
    return {x: this._x, y: this._y};
  }

  lineTo(x: number, y: number) {
    this.moveTo(x, y);
  }

  linedTo() {
    return this.movedTo();
  }
}
