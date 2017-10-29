import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotificacionesService} from '../notificaciones.service'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  notificacion: any = {};
  id = null;
  constructor(private notificacionService: NotificacionesService, private route: ActivatedRoute) {
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
          alert('Ingrese el titulo');
        } else if (!this.notificacion.tipo) {
          alert('Escoja el tipo');
        } else if (!this.notificacion.mensaje) {
          alert('Escriba el mensaje');
        }else{
          this.notificacionService.guardarLugar(this.notificacion)
          alert('Datos Guardados');
          this.notificacion = {};
        }
       
      };

      actualizarNotificacion() {
  
       
            this.notificacionService.editarNotificacion(this.notificacion);
            alert('Datos Editados');
            this.notificacion = {};
     
      }
 


 

}
