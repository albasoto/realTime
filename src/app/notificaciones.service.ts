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

  guardarLugar(notificacion) {

    this.db.database.ref('notificabciones/' + notificacion.id).set(notificacion);
  }

  buscarNotificaciones(filtro) {
    // primero nombre de la coleccion que vas a consultar en mi caso tengo la coleccion de lugares
    //  luego en orderByChild pones por que campo vas a filtrar y en equlTo el valor del filtro
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
    return this.db.object('/notificaciones/' + id).remove();
  }




}
