import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {
  @Input()
  id: string;

  @Input()
  iconId: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
      this.togglePasswordVisibility();
    });
  }

  togglePasswordVisibility(): void {
    const password = document.getElementById(this.id);
    const icon = document.getElementById(this.iconId);
    // @ts-ignore
    if (password.type === 'password') {
      // @ts-ignore
      password.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      // @ts-ignore
      password.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
}
