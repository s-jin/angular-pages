import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClassDirective]'
})
export class ClassDirectiveDirective {

  constructor(private element: ElementRef) {}

/*    @Input('appClassDirective') set backgroundColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
   }
 */

  @Input('appClassDirective') set classNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
