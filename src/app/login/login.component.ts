import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "../servicios/authorization.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {};
  constructor( private _login: AuthorizationService, private _router: Router) { }

  ngOnInit() {

  }

  logearse() {
    this._login.login(this.usuario.email, this.usuario.password);
  }
}
