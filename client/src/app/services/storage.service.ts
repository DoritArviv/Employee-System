import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key : string, value: any ) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clearStorage(){
    localStorage.clear();
  }
}
