import {NotificacionesService} from '../notificaciones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent  {

  notificaciones = null;
  constructor(private db: NotificacionesService) {
    this.db.getNotificacion().subscribe(
      notificaciones => {
        this.notificaciones = notificaciones;

      }, error => {
        console.log('ocurrio un error lugares', error);
      });

  }
  deleteNotification(id) {
    this.db.deleteNotification(id);
    alert('Datos Eliminados');
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


