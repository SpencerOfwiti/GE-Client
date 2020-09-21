import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    });
  }

  get form(): any { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }

    this.loading = true;
    this.authService.login(this.form.email.value, this.form.password.value)
      .pipe(first()).subscribe(user => {
      this.loading = false;
      localStorage.setItem('CIC-User', JSON.stringify(user));
    }, error => {
      this.loading = false;
      this.submitted = false;
      this.error = error;
    });
  }
}
