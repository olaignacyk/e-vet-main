import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Token } from 'src/app/modules/shared/resources/interfaces/token.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getStorageData(): Token | null {
    return JSON.parse(localStorage.getItem('auth') || 'null');
  }

  setTokens(token: Partial<Token>) {
    if (token.token) {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...token,
          user: this.decodeToken(token.token),
        })
      );
    } else {
      console.error('Invalid token provided');
    }
  }

  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
