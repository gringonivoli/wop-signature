export class MouseEventOf {
  constructor(private _touchEvent: TouchEvent) {}

  value(): MouseEvent {
    return {
      clientX: this._touchEvent.touches[0].clientX,
      clientY: this._touchEvent.touches[0].clientY
    } as MouseEvent;
  }
}
