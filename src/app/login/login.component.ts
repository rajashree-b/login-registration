import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    const user = this.userService.getUsers().find(u => u.email === email && u.password === password);
    if (user) {
      alert('Login successful!');
      this.router.navigate(['/home'], { state: { userName: user.userName } });
    } else {
      alert('Invalid email or password');
    }
  }
}
