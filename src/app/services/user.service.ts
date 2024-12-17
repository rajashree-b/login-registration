import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}