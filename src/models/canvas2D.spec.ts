import { Canvas2D } from './canvas2D';
import { FakeCanvas } from './fake-canvas';
import { FakeCanvasRenderingContext2D } from './fake-canvas-rendering-context2D';

describe('canvas2D', () => {
  let canvas2D: Canvas2D;
  const canvas = new FakeCanvas();
  let fakeCanvasRenderingContext2D: FakeCanvasRenderingContext2D;

  beforeEach(() => {
    fakeCanvasRenderingContext2D = new FakeCanvasRenderingContext2D(
      canvas as unknown as HTMLCanvasElement
    );
    canvas2D = new Canvas2D(fakeCanvasRenderingContext2D as unknown as CanvasRenderingContext2D);
  });

  it('can be defined', () => {
    expect(canvas2D).toBeTruthy();
  });

  it('is drawing on mousedown', () => {
    canvas2D.start();
    canvas.emit('mousedown');

    expect(canvas2D.isDrawing()).toBeTruthy();
  });

  it('remove event listeners on stop', () => {
    canvas2D.start();
    canvas2D.stop();

    canvas.emit('mousedown');

    expect(canvas2D.isDrawing()).toBeFalsy();
  });

  it('is drawing on touchstart', () => {
    canvas2D.start();
    canvas.emit('touchstart');

    expect(canvas2D.isDrawing()).toBeTruthy();
  });

  it('is not drawing on mouseup', () => {
    canvas2D.start();
    canvas.emit('mousedown');

    canvas.emit('mouseup');

    expect(canvas2D.isDrawing()).toBeFalsy();
  });

  it('is not drawing on touchend', () => {
    canvas2D.start();
    canvas.emit('touchstart');

    canvas.emit('touchend');

    expect(canvas2D.isDrawing()).toBeFalsy();
  });

  it('it is moved and lined if the mouse draw', () => {
    canvas2D.start();
    canvas.emit('mousedown');

    canvas.emit('mousemove');

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: -2, y: 1});
    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: -2, y: 1});
  });

  it('it is moved and lined if the touch draw', () => {
    canvas2D.start();
    canvas.emit('touchstart');

    canvas.emit('touchmove');

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: -2, y: 1});
    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: -2, y: 1});
  });

  it('it is not moved and lined if the mouse is up', () => {
    canvas2D.start();
    canvas.emit('mousedown');

    canvas.emit('mouseup');

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: 0, y: 0});
    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: 0, y: 0});
  });

  it('it is not moved and lined if the touch ends', () => {
    canvas2D.start();
    canvas.emit('touchstart');

    canvas.emit('touchend');

    expect(fakeCanvasRenderingContext2D.movedTo()).toEqual({x: 0, y: 0});
    expect(fakeCanvasRenderingContext2D.linedTo()).toEqual({x: 0, y: 0});
  });

  it('clear canvas', () => {
    canvas2D.start();
    canvas.emit('mousedown');
    canvas.emit('mousemove');
    canvas.emit('mouseup');

    canvas2D.clear();

    expect(canvas2D.isDrawing()).toBeFalsy();
  });

  it('canvas to data URL', () => {
    canvas2D.start();
    canvas.emit('mousedown');
    canvas.emit('mousemove');
    canvas.emit('mouseup');

    expect(canvas2D.toDataURL()).toContain('image');
  });
});
