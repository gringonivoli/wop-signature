export class FakeEvent {

  constructor(private _clientX: number = 3, private _clientY: number = 4) {
  }

  value() {
    return { type: '', clientX: this._clientX, clientY: this._clientY, touches: [{
        clientX: this._clientX, clientY: this._clientY,
        force: 0,
        identifier: 0,
        pageX: 0,
        pageY: 0,
        radiusX: 0,
        radiusY: 0,
        rotationAngle: 0,
        screenX: 0,
        screenY: 0,
        target: undefined,
      }]};
  }
}
