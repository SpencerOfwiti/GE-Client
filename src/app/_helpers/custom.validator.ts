import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidator {
  static passwordMatchValidator(control: AbstractControl): void {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
    }
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidationErrors | null {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
