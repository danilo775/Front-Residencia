import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appDestaque(numero: number) {
    this.viewContainer.clear();
   
      for (let i = 0; i < numero; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
   
    
  }
}
