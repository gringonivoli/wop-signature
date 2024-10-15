import { Component, Prop, h, Element } from '@stencil/core';
import { Canvas2D } from '../../models/canvas2D';

@Component({
  tag: 'wop-signature',
  shadow: true,
})
export class WopSignature {

  @Element() hostHtmlElement: HTMLElement;

  componentDidLoad() {
    new Canvas2D(this._canvas().getContext('2d')).start();
  }

  _canvas(): HTMLCanvasElement {
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
