import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../components/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class PagesModule { }
