import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[isClippedToggler]',
})
export class IsClippedTogglerDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  // tslint:disable-next-line:no-unused-variable
  @Input('isClippedToggler') private set isClipped(clipped: boolean) {
    this.renderer.setElementClass(this.el.nativeElement.ownerDocument.body.parentElement, 'is-clipped', clipped);
  }
}
