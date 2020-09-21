import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMenuToggle]'
})
export class MenuToggleDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      this.onMenuToggle();
    });
  }

  // Menu Trigger
  onMenuToggle(): void {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    const content = document.getElementById('content');
    content.classList.toggle('active');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    sidebarCollapse.classList.toggle('active');
  }

}
