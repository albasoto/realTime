import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificacionesService} from '../notificaciones.service'
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {


  notificacion: any = {};
  id = null;
  constructor(private notificacionService: NotificacionesService,
               private route: ActivatedRoute,
               private navegar: Router,
               private _toasterService: ToasterService
  ) {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.notificacionService.getOneNotification(this.id).subscribe(
        notificacion => {
          this.notificacion = notificacion;
        });
    }
  }

  guardarNotificacion() {
        this.notificacion.id = Date.now();
        if (!this.notificacion.titulo) {
          this._toasterService.pop('error', 'Ingrese el titulo');
        } else if (!this.notificacion.tipo) {
          this._toasterService.pop('error', 'Escoja el tipo');
        } else if (!this.notificacion.mensaje) {
          this._toasterService.pop('error', 'Escriba el mensaje');
        }else{
          this.notificacionService.guardarNotificaciones(this.notificacion)
          this._toasterService.pop('success', 'Correcto', 'Datos Guardados');
          this.navegar.navigate([''])
          this.notificacion = {};
        }

      };

      actualizarNotificacion() {

            this.notificacionService.editarNotificacion(this.notificacion);
            this._toasterService.pop('success', 'Correcto', 'Datos Editados');
            this.notificacion = {};

      }





}
