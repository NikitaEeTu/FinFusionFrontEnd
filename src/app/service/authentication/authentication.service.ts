import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterRequest } from "../../interface/RegisterRequest";
import { AuthenticationResponse } from "../../interface/AuthenticationResponse";
import { AuthenticationRequest } from "../../interface/AuthenticationRequest";
import { LocalStorageService } from "../localsaving/local-storage.service";
import { Router } from "@angular/router";
import { TokenValidationRequest } from "../../interface/TokenValidationRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = 'http://localhost:8080/api/v1/auth';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.API_URL}/register`, registerRequest);
  }

  authenticate(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.API_URL}/authenticate`, authenticationRequest);
  }

  validateUserToken(tokenValidationRequest: TokenValidationRequest): Observable<boolean> {
    return this.http.post<boolean>(`${this.API_URL}/validate`, tokenValidationRequest)
  }

  handleSuccessfulAuthentication(token: string) {
    this.localStorageService.saveData('authKey', token);
    this.router.navigate(['/dashboard']);
  }

}
