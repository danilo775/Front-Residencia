import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimacao]'
})
export class AnimateDirective {

  @Input()
  animation: string= '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent) {
    this.renderer.setStyle(this.elRef.nativeElement, 'appAnimacao', this.animation);
  }
}
