import { FakeEvent } from './fake-event';

export class FakeCanvas {
  width: number;
  height: number;

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

  toDataURL(): string {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEDSURBVEhLtZJBEoMwDAP7lr6nn+0LqUGChsVOwoGdvTSSNRz6Wh7jxvT7+wn9Y4LZae0e+rXLeBqjh45rBtOYgy4V9KYxlOpqRjmNiY4+uJBP41gOI5BM40w620AknTVwGgfSWQMK0tnOaRpV6ewCatLZxn8aJemsAGXp7JhGLBX1wYlUtE4jkIpnwKGM9xeepG7mwblMpl2/CUbCJ7+6CnQzAw5lvD/8DxGIpbMClKWzdjpASTq7gJp0tnGaDlCVzhpQkM52OB3gQDrbQCSdNSTTAc7kMAL5dIDjjj64UE4HmEh1NaM3HWAIulQwmA4wd+i4ZjwdYDR00GqWsyPrizLD76QCPOHqP2cAAAAAElFTkSuQmCC';
  }
}
