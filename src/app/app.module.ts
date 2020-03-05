import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // modulo de los formularios
import { HttpClientModule } from '@angular/common/http'; // modulo de las peticiones AJAX
import { routing, appRoutingProviders } from './app.routing';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { MomentModule } from 'angular2-moment'; // modulo de fechas
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js'; // cargar libreria para resaltar codigo
import { ContactService } from './services/contact.service';



import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { HomeComponent } from './components/home/home.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { DetailComponent } from './components/contact/contact.component';




@NgModule({//Componentes, pipes
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    EditContactComponent,
    ContactsComponent,
    DetailComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    AngularFileUploaderModule,
    MomentModule,
    NgxHighlightJsModule.forRoot()
  ],
  providers: [ // Servicios
    appRoutingProviders,
    ContactService  
  ],
  bootstrap: [AppComponent] // Componente principal
})
export class AppModule { }
