import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {

    console.log('Directiva llamada');

    // el.nativeElement.style.backgroundColor = 'yellow';

  }

  @Input('appResaltado') nuevoColor: string; // Recibo un atributo de la directiva usada en html

  // Cuando el mouse entra, se coloca en amarillo
  @HostListener('mouseenter') mouseEntro() {

    this.resaltar( this.nuevoColor || 'yellow' );

  }

  // Cuando el mouse sale, vuelve a la normalidad
  @HostListener('mouseleave') mouseSalio() {

    this.resaltar( null );

  }

  private resaltar( color: string ) {

    this.el.nativeElement.style.backgroundColor = color;

  }

}
