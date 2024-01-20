import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../service/authentication/authentication.service";
import { RegisterRequest } from "../interface/RegisterRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  hide = true;

  register() {
    if (this.registerForm.valid) {
      const fromValues = this.registerForm.getRawValue();
      const userData: RegisterRequest = {
        firstName: fromValues.firstName ?? '',
        lastName: fromValues.lastName ?? '',
        email: fromValues.email ?? '',
        password: fromValues.password ?? ''
      }
      this.authenticationService
        .register(userData)
        .subscribe(authenticationResponse =>
          this.authenticationService.handleSuccessfulAuthentication(authenticationResponse.token));
    }
  }
}
