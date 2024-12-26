# Angular Login & Registration Application

This is a simple Angular application with a login page, registration page, and a home page. The application includes form validation, user registration, and authentication functionalities. The home page displays a personalized welcome message after successful login.

## Features

- **Login Page**: 
  - Email and password validation.
  - Displays error messages for invalid email or short password.
  
- **Registration Page**: 
  - Requires a username, email, password, and confirm password.
  - Validates that the password is at least 8 characters long and that the confirm password matches the password.
  - Registers the user and stores the details in memory.

- **Home Page**: 
  - Displays a welcome message with the registered user's username after a successful login.

## Project Structure

src/ app/ components/ login/ login.component.ts login.component.html login.component.css 
registration/ registration.component.ts registration.component.html registration.component.css 
home/ home.component.ts home.component.html home.component.css 
services/ auth.service.ts 
app-routing.module.ts app.module.ts assets/ environments/ README.md



## Installation

Follow these steps to set up the application:

1. Clone the repository:
   git clone https://github.com/your-repository/angular-login-registration.git
   cd angular-login-registration
Install dependencies:
npm install
Run the application:
ng serve
Open the browser and visit http://localhost:4200.

How to Use
1. Register a User
Navigate to the registration page by clicking the Register button.
Fill in the details for Username, Email, Password, and Confirm Password.
Ensure the password is at least 8 characters long and the confirm password matches the original password.
Submit the registration form.
2. Login with Registered User
Navigate to the login page by clicking the Login button.
Enter the registered email and password.
If valid, you will be redirected to the home page, where a personalized welcome message will be displayed.
3. Home Page
After a successful login, the home page will display a "Welcome {UserName}" message.
Technologies Used
Angular: Frontend framework for building dynamic and responsive web applications.
Reactive Forms: Angular’s approach to handling forms with validation.
Routing: Angular's routing system to navigate between login, registration, and home pages.
Notes
This application uses a simple AuthService to manage user registration and authentication, storing user details in memory.
For production use, consider using a backend service to store user data securely and handle authentication.
