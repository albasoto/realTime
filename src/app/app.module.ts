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

import {AuthorizationService} from "./servicios/authorization.service";
import {GuardiaLogin} from "./servicios/guardiaLogin.service";
import {RegistroComponent} from "./crear/crear.component";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToasterModule } from 'angular2-toaster';

//import {PopupModule} from 'ng2-opd-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FiltroNombrePipe} from './pipes/filtroNombre.pipe'


const appRoutes: Routes = [
  {path: '', component: NotificacionesComponent},
  {path: 'new/:id', component: NuevoComponent, canActivate: [GuardiaLogin]},
  {path: 'calendario/:id', component: CalendarioComponent},
  {path: 'crear', component: RegistroComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    NotificacionesComponent,
    LoginComponent,
    CalendarioComponent,
    RegistroComponent,
    FiltroNombrePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToasterModule

   // PopupModule.forRoot()
  ],
  providers: [  NotificacionesService, AuthorizationService, GuardiaLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
