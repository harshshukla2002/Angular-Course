import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.cursor') cursor: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'textDecoration',
      'underline'
    );
    this.cursor = 'pointer';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'textDecoration', 'none');
    this.cursor = 'default';
  }
}
