import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(
    private elementRef : ElementRef
  ) { }

  @HostListener('mouseover')
  public onMouseOver(){
    this.elementRef.nativeElement.style.background = 'red'
    this.elementRef.nativeElement.style.fontSize = 'large'
  }

  @HostListener('mouseout')
  public onMouseOut(){
    this.elementRef.nativeElement.style.background = 'white'
    this.elementRef.nativeElement.style.fontSize = 'medium'
  }

}
