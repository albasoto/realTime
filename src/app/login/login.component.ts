import { Component, OnInit } from '@angular/core';
import {LoginWebServis} from "../webServis/login.webServis";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {};
  constructor( private _webServis: LoginWebServis, private _router: Router) { }

  ngOnInit() {
  }
  logearse() {
    console.log('usuario: ', this.usuario.userName);
    console.log('password: ', this.usuario.password);
    this._webServis.authentification(this.usuario.userName, this.usuario.password);
  }
}
