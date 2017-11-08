import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthorizationService} from './authorization.service';

@Injectable()

export class GuardiaLogin implements  CanActivate {

  isLogeado= false;
  constructor(private _authenticatio: AuthorizationService){
    this._authenticatio.isLogged().subscribe(
      usuario =>{
        if(usuario){
          this.isLogeado = true;
        }else{
          this.isLogeado = false;
        }
      }, error => {
        this.isLogeado = false;
        console.log(error);
      });
  }

  // este es el guardia
  canActivate(){
    return this.isLogeado;
  }
}

