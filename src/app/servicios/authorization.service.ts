import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()

export class AuthorizationService {
  
  

  // verifica si esta logeado
  logeado = false;
  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router) {
  }
  

  registro(email, password) {
    console.log(email, password)
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( respuesta =>{
          alert('Usuario creado');
          this._router.navigate(['']);
          console.log(respuesta);
      }).catch(error=>{
          alert('correo no valido/contraseña minimo 6 caracteres');
          console.log(error);
    });
  }

  public login = (email, password) => {
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    // then es como un try catch para menejo de errores o tambien podrias usar un subscribe pero en el componente no aqui
      .then( respuesta =>{
        alert('Usuario logeado');
        this._router.navigate(['']);// aqui utilizo router para mover a otro lado
        console.log(respuesta);
      }).catch(error=>{
      alert('usuario o password no validos');
      console.log(error);
    });
  };


  // llamo a esta funcion para verificar si esta logeado
  isLogged() {
    return this.logeado;
  }
}
