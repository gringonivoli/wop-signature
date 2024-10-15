import { FakeEvent } from './fake-event';

export class FakeCanvas {
  private _events = new Map<string, CallableFunction>;

  constructor(private _boundingClientRect: any = { top: 5, left: 3 }) {
  }

  addEventListener(eventName: string, callback: CallableFunction) {
    this._events.set(eventName, callback);
  }

  emit(eventName: string) {
    this._events.has(eventName) && this._events.get(eventName)(new FakeEvent().value());
  }

  removeEventListener(eventName: string, callback: CallableFunction) {
    this._events.has(eventName) && this._events.delete(eventName);
  }

  getBoundingClientRect() {
    return this._boundingClientRect;
  }
}
