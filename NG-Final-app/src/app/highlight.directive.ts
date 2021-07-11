import { Directive, Input, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = '#FFF';
  @Input() appHighlight: string = "#DEF";

  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#DEF')
    this.backgroundColor = this.appHighlight
  }

  @HostListener('mouseleave') mouseout() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#FFF')
    this.backgroundColor = this.defaultColor
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor="green"
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
    this.backgroundColor = this.defaultColor
  }

}
