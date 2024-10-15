import { Point } from './point';
import { FakeCanvas } from './fake-canvas';
import { FakeCanvasRenderingContext2D } from './fake-canvas-rendering-context2D';

describe('Point', () => {
  const fakeCanvasRenderingContext2D = new FakeCanvasRenderingContext2D(
    new FakeCanvas() as unknown as HTMLCanvasElement
  );

  it('new', () => {
    expect(new Point(0, 0)).toBeTruthy();
  });

  it('exception on invalid values', () => {
    // @ts-ignore
    expect(() => new Point("0.3", 0)).toThrow();
    // @ts-ignore
    expect(() => new Point(0, `0.4`)).toThrow();
  });

  it('equals', () => {
    const pointA = new Point(1, 1);
    const pointB = new Point(1, 1);

    expect(pointA.equals(pointB)).toBe(true);
  });

  it('subtract of two points', () => {
    const minuendPoint = new Point(10, 15);
    const subtrahendPoint = new Point(3, 2);

    const differencePoint = minuendPoint.subtract(subtrahendPoint);

    expect(differencePoint.x()).toEqual(7);
    expect(differencePoint.y()).toEqual(13);
  });

  it('moveOn a CanvasRenderingContext2D', () => {
    const aPoint = new Point(1, 5);

    aPoint.moveOn(fakeCanvasRenderingContext2D as unknown as CanvasRenderingContext2D);

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: 1, y: 5});
  });

  it('lineOn a CanvasRenderingContext2D', () => {
    const aPoint = new Point(1, 5);

    aPoint.lineOn(fakeCanvasRenderingContext2D as unknown as CanvasRenderingContext2D);

    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: 1, y: 5});
  });
});
