import { MouseEventOf } from './mouse-event-of';
import { MousePositionOf } from './mouse-position-of';
import { Point } from './point';
import { Line } from './line';

export class Canvas2D {

  private _startPosition: Point;
  private _drawing: boolean = false;

  constructor(private _canvasContext: CanvasRenderingContext2D) {}

  start() {
    this._canvasContext.canvas.addEventListener('mousedown', (e: MouseEvent) => { this._startDrawing(e); });
    this._canvasContext.canvas.addEventListener('touchstart', (e: TouchEvent) => { this._startDrawing(new MouseEventOf(e).value()); });
    this._canvasContext.canvas.addEventListener('mousemove', (e: MouseEvent) => { this._draw(e); });
    this._canvasContext.canvas.addEventListener('touchmove', (e: TouchEvent) => { this._draw(new MouseEventOf(e).value()); });
    this._canvasContext.canvas.addEventListener('mouseup', (e: MouseEvent) => { this._stopDrawing(); });
    this._canvasContext.canvas.addEventListener('touchend', (e: TouchEvent) => { this._stopDrawing(); });
  }

  stop() {
    this._canvasContext.canvas.removeEventListener('mousedown', () => {});
    this._canvasContext.canvas.removeEventListener('touchstart', () => {});
    this._canvasContext.canvas.removeEventListener('mousemove', () => {});
    this._canvasContext.canvas.removeEventListener('touchmove', () => {});
    this._canvasContext.canvas.removeEventListener('mouseup', () => {});
    this._canvasContext.canvas.removeEventListener('touchend', () => {});
  }

  isDrawing() {
    return this._drawing;
  }

  private _mousePositionOf(event: MouseEvent): Point {
    return new MousePositionOf(event).in(this._canvasContext.canvas);
  }

  private _startDrawing(event: MouseEvent) {
    this._drawing = true;
    this._startPosition = this._mousePositionOf(event);
  }

  private _draw(event: MouseEvent) {
    if (!this.isDrawing()) return;
    const currentPosition = this._mousePositionOf(event);
    new Line(
      this._startPosition,
      currentPosition
    ).drawIn(this._canvasContext);
    this._startPosition = currentPosition;
  }

  private _stopDrawing() {
    this._drawing = false;
  }

  toDataURL() {
    return this._canvasContext.canvas.toDataURL();
  }

  clear() {
    this._canvasContext.clearRect(0, 0, this._canvasContext.canvas.width, this._canvasContext.canvas.height);
  }
}
