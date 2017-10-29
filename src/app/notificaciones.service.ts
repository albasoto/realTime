import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class NotificacionesService {
  constructor(private db: AngularFireDatabase, private http: Http) { }
  getNotificacion() {
    //retorna todos los lugares que guarde en la base de datos(lugares es una coleccion puedes crear varias colecciones)
    return this.db.list('notificaciones/').valueChanges();
  };
  guardarLugar(notificacion) {

    this.db.database.ref('notificaciones/' + notificacion.id).set(notificacion);
  };

  buscar(parametro) {

    this.db.list('/notificaciones', ref => ref.orderByChild('titulo').equalTo(parametro))
  };


  editarNotificacion(notificacion) {
    this.db.database.ref('notificaciones/' + notificacion.id).set(notificacion);
  };

  getOneNotification(id) {
    // obtiene un lugar por id
    return this.db.object('notificaciones/' + id).valueChanges();
  };

  deleteNotification(id) {
    return this.db.object('/notificaciones/' + id).remove();
  };




}
