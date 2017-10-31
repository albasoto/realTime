import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {Http, Headers, Response} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {HttpModule} from '@angular/http';
import {NotificacionesService} from '../app/notificaciones.service';
import { NuevoComponent } from './nuevo/nuevo.component'

import {RouterModule, Routes} from '@angular/router';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'new/:id', component: NuevoComponent},
  {path: 'notificaciones/:id', component: NotificacionesComponent},
  {path: 'calendario/:id', component: CalendarioComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    NotificacionesComponent,
    LoginComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],

  providers: [  NotificacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
