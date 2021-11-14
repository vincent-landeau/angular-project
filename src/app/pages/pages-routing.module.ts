import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";

const routes: Routes = [
    {
        path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
        redirectTo: 'home',
        pathMatch: 'full'
    },
     {
        path: 'home', // correspond à http://localhost:4200/home-page
        component: HomePageComponent
    },
     {
        path: 'contact', // correspond à http://localhost:4200/contact
        component: ContactPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
