import { Injectable } from '@angular/core';

export interface User {
  name: string
  surname: string
  id: string
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { }

  private _user: User = {
    name: 'Hamdija',
    surname: 'Osmic',
    id: 'hamdone',
    age: 69
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  getInfo(): User{
    return this._user;
  }


}
