import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserCredential } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: UserCredential): Observable<any> {
    console.log('email -> ', user.email);
    console.log('password -> ', user.password);
    return of(true);
  }
}
