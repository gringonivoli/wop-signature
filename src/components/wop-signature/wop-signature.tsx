import { Component, Prop, h, Element, Method, Event, EventEmitter } from '@stencil/core';
import { Canvas2D } from '../../models/canvas2D';

@Component({
  tag: 'wop-signature',
  shadow: true,
})
export class WopSignature {

  @Element() hostHtmlElement: HTMLElement;
  @Event({ eventName: 'wopSignature:cleared' })
  drawCleared: EventEmitter<void>;
  @Event({ eventName: 'wopSignature:finished' })
  drawFinished: EventEmitter<string>;
  private _canvas: Canvas2D;

  componentDidLoad() {
    this._canvas = new Canvas2D(this._canvasElement().getContext('2d'));
    this._canvas.start();
  }

  @Method()
  async clear() {
    this._canvas.clear();
    this.drawCleared.emit();
  }

  @Method()
  async finish() {
    this.drawFinished.emit(this._canvas.toDataURL());
    await this.clear();
  }

  _canvasElement(): HTMLCanvasElement {
    return this.hostHtmlElement.shadowRoot.querySelector('canvas');
  }

  render() {
    return (
      <div>
        <canvas width="150" height="150"></canvas>
      </div>
    );
  }
}
