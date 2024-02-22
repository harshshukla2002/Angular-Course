import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheck]',
})
export class CheckDirective {
  @Input() set appCheck(condition: boolean) {
    if (!condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}
}
