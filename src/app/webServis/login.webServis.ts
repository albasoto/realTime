import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()

export class LoginWebServis {
  // codigo de Autorizacion del web servis es como un permiso para realizar una peticion
  token = 'jQgv/+JjxkFZwSWehbbAVg==';
  // content type es el tipo de respuesta que devuelve el servidor
  contentType = 'application/x-www-form-urlencoded';
  // url donde envias la peticion
  url = 'http://192.168.0.86:8080/web/wservices/user/logincase1.do?userName=jperez&password=admin'

  // verifica si esta logeado
  logeado = false;
  constructor(private _http: Http, private header, private _router: Router) {
  }

  authentification(userName, password) {
    let user = {
      userName,
      password
    }
    let permisos = new Headers({'Content-Type': this.contentType, 'Authorization': this.token });
    return this._http.post(this.url + user,{ headers: permisos })
      .subscribe(
        respuesta => {
          console.log('La respuesta es: ', respuesta);
          this.logeado = true;
          alert('Usuario Logeado')
          this._router.navigate(['']);
        }, error => {
          console.log('Ocurrio un error');
          this.logeado = false;
        });
  }


  // llamo a esta funcion para verificar si esta logeado
  isLogged() {
    return this.logeado;
  }
}
