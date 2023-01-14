import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {

  constructor(
    private elementRef : ElementRef
  ) { }

  @HostListener('change')
  public onChange(){
    if ( this.elementRef.nativeElement.value == 0 ) { this.elementRef.nativeElement.style.border = '1px solid red' }
    else { this.elementRef.nativeElement.style.border = '1px solid black'} 
  }

}
