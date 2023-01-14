import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClicGame]'
})
export class ClicGameDirective {

  constructor(
    private elementRef : ElementRef
  ) { }
  
  @HostListener('mouseover')
  public onMouseOver(){
    this.elementRef.nativeElement.style.background='orange'
  }

  @HostListener('mouseout')
  public onMouseOut(){
    this.elementRef.nativeElement.style.background='white'
  }

  @HostListener('click')
  public onClick(){
    alert("Has pulsado sobre el juego " + this.elementRef.nativeElement.children[0].innerHTML)
  }
}
