import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from "../localsaving/local-storage.service";
import { inject } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { TokenValidationRequest } from "../../interface/TokenValidationRequest";
import { catchError, map, of } from "rxjs";

export const pageAuthGuardGuard: CanActivateFn = () => {
  const jwtKey = inject(LocalStorageService).getData('authKey');
  const email = inject(LocalStorageService).getData('email');
  const tokenValidationRequest: TokenValidationRequest = {
    email: email,
    token: jwtKey
  }

  return inject(AuthenticationService).validateUserToken(tokenValidationRequest).pipe(
    map(data => {
      return data;
    }),
    catchError(() => {
      inject(Router).navigate(['/login']);
      return of(false);
    })
  )
};
