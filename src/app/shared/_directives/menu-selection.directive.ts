import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMenuSelection]'
})
export class MenuSelectionDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      if (mediaQuery.matches) {
        this.onMenuSelect();
      }
    });
  }

  onMenuSelect(): void {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('active');
    const content = document.getElementById('content');
    content.classList.add(  'active');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    sidebarCollapse.classList.remove('active');
  }
}
