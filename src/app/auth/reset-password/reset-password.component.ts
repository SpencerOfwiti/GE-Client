import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get form(): any { return this.resetForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.resetForm.invalid) { return; }

    this.loading = true;
    this.authService.resetPassword(this.form.email.value)
      .pipe(first()).subscribe(res => {
        this.loading = false;
        console.log(res);
    }, error => {
        this.loading = false;
        this.submitted = false;
        this.error = error;
    });
  }
}
