import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[letras]'
})
export class SoloLetrasDirective {

  constructor(
    private readonly elRef: ElementRef,
    ) { }

  @HostListener('input',['$event'])
    onchangeInput(event: Event):void{  //captura el elemento en el DOM
      const numero = /[^a-z ]*/g ;
      const initVaule = this.elRef.nativeElement.value;
      this.elRef.nativeElement.value = initVaule.replace(numero,'');
      if(initVaule !== this.elRef.nativeElement.value) event.stopPropagation();
      
    }

}
