import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveData(value: string) {
    localStorage.setItem('authKey', value);
  }

  getData(key: string) {
    localStorage.getItem(key);
  }

}
