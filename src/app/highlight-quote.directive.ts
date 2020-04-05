
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {


  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks() {
    this.textDeco("highlight")
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.backgroundColor = 'blue';

  }


}