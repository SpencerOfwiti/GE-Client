import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_services';
import {first} from 'rxjs/operators';
import {CustomValidator} from '../../_helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        CustomValidator.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // 6. Has a minimum length of 8 characters
        Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: ['', Validators.required]
    }, {
      // validator for the form group
      validator: CustomValidator.passwordMatchValidator
    });
  }

  get form(): any { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) { return; }

    this.loading = true;
    this.authService.register(this.form.email.value, this.form.password.value)
      .pipe(first()).subscribe(res => {
        this.loading = false;
        console.log(res);
    }, error => {
        this.loading = false;
        this.submitted = false;
        this.error = error;
    })
  }
}
