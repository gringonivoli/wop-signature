import { FakeEvent } from './fake-event';

describe('FakeEvent', () => {
  it('should be defined', () => {
    expect(new FakeEvent()).toBeTruthy();
  });

  it('value', () => {
    expect(new FakeEvent(1, 2).value).toBeTruthy();
  });
});
