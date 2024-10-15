import { FakeEvent } from './fake-event';
import { FakeCanvas } from './fake-canvas';
import { Point } from './point';
import { MousePositionOf } from './mouse-position-of';


describe('mousePositionOf', () => {
  const fakeCanvas = new FakeCanvas({ top: 2, left: 3}) as unknown as HTMLCanvasElement;
  const fakeEvent = new FakeEvent(10, 7).value() as unknown as MouseEvent;
  const testPoint = new Point(8, 4);

  it('new', () => {
    expect(new MousePositionOf(fakeEvent));
  });

  it('in a canvas', () => {
    expect(new MousePositionOf(fakeEvent).in(fakeCanvas).equals(testPoint)).toBeTruthy();
  });
});
