import { Notificacion } from '../domain/notificaciones';
import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroNombreNotificacion'
})
export class FiltroNombrePipe implements PipeTransform {

    transform(value: Notificacion[], filterBy: string): Notificacion[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((notificacion: Notificacion) =>
        notificacion.titulo.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
