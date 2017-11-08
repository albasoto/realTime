import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {ToasterService} from "angular2-toaster";

@Injectable()

export class AuthorizationService {



  // verifica si esta logeado
  logeado = false;
  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router, private _toasterService: ToasterService) {
  }

  getEmail()
  {
      return this._firebaseAuth.auth.currentUser.email;
  }

  registro(email, password) {
    console.log(email, password)
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( respuesta =>{
          this._router.navigate(['']);
          this._toasterService.pop('success', 'Correcto', 'Usuario creado');
          console.log(respuesta);
      }).catch(error=>{
        this._toasterService.pop('error', 'email o clava no validos');
          console.log(error);
    });
  }

  public login = (email, password) => {
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    // then es como un try catch para menejo de errores o tambien podrias usar un subscribe pero en el componente no aqui
      .then( respuesta =>{
        this._toasterService.pop('success', 'Correcto', 'Usuario logeado');
        this._router.navigate(['']);// aqui utilizo router para mover a otro lado
        console.log(respuesta);
      }).catch(error=>{
      this._toasterService.pop('error', 'usuario o password no validos');
      console.log(error);
    });
  };


  isLogged() {
    return this._firebaseAuth.authState
 }

 cerrarSesion(){
  this._firebaseAuth.auth.signOut();
  this._router.navigate(['/login']);
}
}
