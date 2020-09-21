import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): string {
    return 'Logged In!';
  }

  register(email: string, password: string): string {
    return 'Registered!';
  }

  resetPassword(email: string): string {
    return 'Password reset!';
  }
}
