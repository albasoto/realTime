import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginWebServis} from './login.webServis';

@Injectable()

export class GuardiaLogin implements  CanActivate {

  constructor(private _login: LoginWebServis ) {
  }
  canActivate() {
    // lamma a la funcion isLogged que esta creada en login.webServis verifica si esta logeado o no
    return this._login.isLogged();
  }
}

