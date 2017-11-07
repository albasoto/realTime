import {Component} from "@angular/core";
import {AuthorizationService} from "../servicios/authorization.service";

@Component({
  selector: 'app-registro',
  templateUrl: './crear.component.html'
})

export class RegistroComponent {
  constructor(private _authorizacion: AuthorizationService){}
  usuario:any = {};
  crearUsuario(){
    this._authorizacion.registro(this.usuario.email, this.usuario.password)
  }
}