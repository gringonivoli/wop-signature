import { Point } from './point';

export class MousePositionOf {

  constructor(private _anEvent: MouseEvent) {}

  in(aCanvas: HTMLCanvasElement): Point {
    return new Point(this._anEvent.clientX, this._anEvent.clientY)
      .subtract(
        new Point(
          aCanvas.getBoundingClientRect().top,
          aCanvas.getBoundingClientRect().left
        )
      );
  }
}
