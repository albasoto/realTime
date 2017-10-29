import { Component, OnInit } from '@angular/core';
import {NotificacionesService} from '../../app/notificaciones.service';

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
  deleteNotification(id){
    this.db.deleteNotification(id);
    alert('Datos Eliminados');
 
  }

}
