import {NotificacionesService} from '../notificaciones.service';
import { Component, OnInit, ViewChild  } from '@angular/core';
import {AuthorizationService} from '../servicios/authorization.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent  {

  isLogeado = false;
  notificaciones = null;
  constructor(private db: NotificacionesService, private _autorizacion: AuthorizationService) {
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
let confirmacion = confirm("Esta seguro de elimiar")
   if(this.isLogeado && confirmacion) {
      this.db.deleteNotification(id);
      alert('Datos Eliminados');
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


