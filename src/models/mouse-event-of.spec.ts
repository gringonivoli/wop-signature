import { MouseEventOf } from './mouse-event-of';
import { FakeEvent } from './fake-event';

describe('MouseEventOf', () => {
  const touchEvent = new FakeEvent().value() as unknown as TouchEvent;

  it('Should be defined', () => {
    expect(new MouseEventOf(touchEvent)).toBeTruthy();
  });

  it('value', () => {
    const event = new MouseEventOf(touchEvent).value();

    expect(event.clientX).toEqual(3);
    expect(event.clientY).toEqual(4);
  });
});
