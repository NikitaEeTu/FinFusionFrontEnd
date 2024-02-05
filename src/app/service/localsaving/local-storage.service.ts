import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string): string {
    let jwtKey = localStorage.getItem(key);
    if (!jwtKey) {
      jwtKey = ""
    }
    return jwtKey
  }
}
