import {NotificacionesService} from '../notificaciones.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import {AuthorizationService} from '../servicios/authorization.service';

import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent  {
  tituloFilter = ''
  isLogeado = false;
  notificaciones = null;
  email= null
  constructor(private db: NotificacionesService, private _autorizacion: AuthorizationService,  private _toasterService: ToasterService) {
    this.db.getNotificacion().subscribe(
      notificaciones => {
        this.notificaciones = notificaciones;

      }, error => {
        console.log('ocurrio un error lugares', error);
      });

      this._autorizacion.isLogged().subscribe(
        usuario =>{
          if(usuario){
            this.isLogeado = true;
            this.email = _autorizacion.getEmail();
          }else{
            this.isLogeado = false;
          }
        }, error => {
          this.isLogeado = false;
          console.log(error);
        });

  }
  deleteNotification(id) {
   /* this.popup1.options = {
      header: "Your custom header",
      color: "#5cb85c", // red, blue....
      widthProsentage: 40, // The with of the popou measured by browser width
      animationDuration: 1, // in seconds, 0 = no animation
      showButtons: true, // You can hide this in case you want to use custom buttons
      confirmBtnContent: "OK", // The text on your confirm button
      cancleBtnContent: "Cancel", // the text on your cancel button
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.popup1.show(this.popup1.options);*/

   if(this.isLogeado) {
    let confirmacion = confirm("Esta seguro de elimiar")
     if(confirmacion) {
      this.db.deleteNotification(id);
      this._toasterService.pop('success', 'Correcto', 'Datos Eliminados');
     }
    }

  }

  buscarPorTitulo(titulo) {
    console.log('voy a buscar: ', titulo);
    this.db.buscarNotificaciones(titulo).subscribe(
      busqueda => {
        console.log('filtroes: ', busqueda);
        this.notificaciones = busqueda;
    });

  }


  }


