import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.userService.addUser(this.registrationForm.value);
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}
