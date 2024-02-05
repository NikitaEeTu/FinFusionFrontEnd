import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../service/authentication/authentication.service";
import { AuthenticationRequest } from "../interface/AuthenticationRequest";
import { LocalStorageService } from "../service/localsaving/local-storage.service";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  hide = true;

  constructor(
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.getRawValue();
      const authRequest: AuthenticationRequest = {
        email: formData.email ?? '',
        password: formData.password ?? ''
      }
      this.authService.authenticate(authRequest)
        .pipe(
          catchError(error => {
            return throwError(error);
          })
        )
        .subscribe(authenticationResponse => {
          this.authService.handleSuccessfulAuthentication(authenticationResponse.token);
          this.localStorageService.saveData("email", authRequest.email);
        });
    }
  }
}
