import {AngularFireDatabase} from 'angularfire2/database/database';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {NotificacionesService} from '../app/notificaciones.service';
import {ActivatedRoute} from '@angular/router';
declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notificacionService: NotificacionesService, private route: ActivatedRoute) {

  }

}
