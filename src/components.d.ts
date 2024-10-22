/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WopSignature {
        "clear": () => Promise<void>;
        "finish": () => Promise<void>;
    }
}
export interface WopSignatureCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWopSignatureElement;
}
declare global {
    interface HTMLWopSignatureElementEventMap {
        "wopSignature:cleared": void;
        "wopSignature:finished": string;
    }
    interface HTMLWopSignatureElement extends Components.WopSignature, HTMLStencilElement {
        addEventListener<K extends keyof HTMLWopSignatureElementEventMap>(type: K, listener: (this: HTMLWopSignatureElement, ev: WopSignatureCustomEvent<HTMLWopSignatureElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLWopSignatureElementEventMap>(type: K, listener: (this: HTMLWopSignatureElement, ev: WopSignatureCustomEvent<HTMLWopSignatureElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLWopSignatureElement: {
        prototype: HTMLWopSignatureElement;
        new (): HTMLWopSignatureElement;
    };
    interface HTMLElementTagNameMap {
        "wop-signature": HTMLWopSignatureElement;
    }
}
declare namespace LocalJSX {
    interface WopSignature {
        "onWopSignature:cleared"?: (event: WopSignatureCustomEvent<void>) => void;
        "onWopSignature:finished"?: (event: WopSignatureCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "wop-signature": WopSignature;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wop-signature": LocalJSX.WopSignature & JSXBase.HTMLAttributes<HTMLWopSignatureElement>;
        }
    }
}
