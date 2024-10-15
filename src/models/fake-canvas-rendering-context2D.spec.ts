import { FakeCanvas } from './fake-canvas';
import { FakeCanvasRenderingContext2D } from './fake-canvas-rendering-context2D';

describe('FakeCanvasRenderingContext2D', () => {
  let fakeCanvasRenderingContext2D: FakeCanvasRenderingContext2D;
  const fakeCanvas = new FakeCanvas() as unknown as HTMLCanvasElement;

  beforeEach(() => {
    fakeCanvasRenderingContext2D = new FakeCanvasRenderingContext2D(fakeCanvas);
  });

  it('should be defined', () => {
    expect(fakeCanvasRenderingContext2D).toBeTruthy();
  });

  it('canvas', () => {
    expect(fakeCanvasRenderingContext2D.canvas).toBeTruthy();
  });

  it('moveTo', () => {
    fakeCanvasRenderingContext2D.moveTo(1, 1);

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: 1, y: 1});
  });

  it('lineTo', () => {
    fakeCanvasRenderingContext2D.lineTo(1, 1);

    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: 1, y: 1});
  });
});
