import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import { ImageComponent } from './image-viewer/image/image.component';
import { ImageButtonsComponent } from './image-viewer/image/image-buttons/image-buttons.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSpacesPipe } from "../pipes/no-spaces.pipe";
import {NoQuotesPipe} from "../pipes/no-quotes.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ImageViewerComponent,
    ImageComponent,
    ImageButtonsComponent,
    ContactFormComponent,
    NoSpacesPipe,
    NoQuotesPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ImageViewerComponent,
    ImageComponent,
    ImageButtonsComponent,
    ContactFormComponent
  ]
})
export class SharedModule {
}
