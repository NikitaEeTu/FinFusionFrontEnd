import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveData(value: string) {
    localStorage.setItem('authKey', value);
  }

  getData(): string {
    let key = localStorage.getItem('authKey');
    if(!key) {
      key = ""
    }
    return key
  }
}
