import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class NotificacionesService {
  constructor(private db: AngularFireDatabase, private http: Http) { }
  getNotificacion() {
    return this.db.list('notificaciones/').valueChanges();
  }

  guardarNotificaciones(notificacion) {

    this.db.database.ref('notificaciones/' + notificacion.id).set(notificacion);
  }

  buscarNotificaciones(filtro) {
 
     return this.db.list('notificaciones/' , ref => ref.orderByChild('titulo').equalTo(filtro)).valueChanges()
   }


  editarNotificacion(notificacion) {
    this.db.database.ref('notificaciones/' + notificacion.id).set(notificacion);
  }

  getOneNotification(id) {
    // obtiene un lugar por id
    return this.db.object('notificaciones/' + id).valueChanges();
  }

  deleteNotification(id) {
    return this.db.object('notificaciones/' + id).remove();
  }




}
