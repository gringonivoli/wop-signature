import { FakeCanvas } from './fake-canvas';

describe('Fake Canvas', () => {
  it('Should be defined', () => {
    expect(new FakeCanvas());
  });

  it('emit an event', () => {
    let result = false;
    const canvas = new FakeCanvas();
    canvas.addEventListener('testEvent', (event) => { result = true; });

    canvas.emit('testEvent');

    expect(result).toBeTruthy();
  });

  it('getBoundingClientRect', () => {
    const testValue = {top: 5, left: 3};
    expect(new FakeCanvas(testValue).getBoundingClientRect()).toEqual(testValue);
  });
});
