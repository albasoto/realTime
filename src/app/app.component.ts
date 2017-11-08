import {AngularFireDatabase} from 'angularfire2/database/database';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {NotificacionesService} from '../app/notificaciones.service';
import {ActivatedRoute} from '@angular/router';
import {AuthorizationService} from './servicios/authorization.service';
declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogeado = false;
  email = null;
  constructor(private _authenticatio: AuthorizationService){
    this._authenticatio.isLogged().subscribe(
      usuario =>{
        if(usuario){
          this.isLogeado = true;
          this.email = _authenticatio.getEmail();
        }else{
          this.isLogeado = false;
        }
      }, error => {
        this.isLogeado = false;
        console.log(error);
      });
  }

  finalizarSesion(){
    this._authenticatio.cerrarSesion();
   }

}
