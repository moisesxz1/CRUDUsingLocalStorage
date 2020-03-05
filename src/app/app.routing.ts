//Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


//Importar componentes

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DetailComponent } from './components/contact/contact.component';


//Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'signup',  component: RegisterComponent },
    { path: 'contacts', component: ContactsComponent},
    { path: 'contact/:id', component: DetailComponent},
    { path: 'edit-contact/:id', component: EditContactComponent},
    { path: '**', component: HomeComponent }
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 