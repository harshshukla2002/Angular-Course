import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class basicHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.margin = '10px';
    this.element.nativeElement.style.fontSize = '20px';
    this.element.nativeElement.style.padding = '10px';
  }
}
