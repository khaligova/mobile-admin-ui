import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[required]',
  standalone: true
})
export class RequiredDirective{

  constructor(private el: ElementRef,private renderer:Renderer2){
  }
  
  ngOnInit() {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', `${this.el.nativeElement.innerHTML} <span style="color:red;">*</span>`);
  }
}
