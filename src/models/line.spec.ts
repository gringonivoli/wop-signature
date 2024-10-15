import { Line } from './line';
import { Point } from './point';
import { FakeCanvas } from './fake-canvas';
import { FakeCanvasRenderingContext2D } from './fake-canvas-rendering-context2D';

describe('Line', () => {
  let aLine: Line;
  const pointA = new Point(1, 1);
  const pointB = new Point(7, 7);
  const fakeCanvasRenderingContext2D = new FakeCanvasRenderingContext2D(
    new FakeCanvas() as unknown as HTMLCanvasElement
  );

  beforeEach(() => {
    aLine = new Line(pointA, pointB);
  });

  it('Should be defined', () => {
    expect(aLine).toBeTruthy();
  });

  it('drawIn', () => {
    aLine.drawIn(fakeCanvasRenderingContext2D as unknown as CanvasRenderingContext2D);
  });
});
