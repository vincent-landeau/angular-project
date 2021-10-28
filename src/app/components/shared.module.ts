import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ImageViewerComponent} from "./image-viewer/image-viewer.component";
import { ImageComponent } from './image-viewer/image/image.component';
import { ImageButtonsComponent } from './image-viewer/image/image-buttons/image-buttons.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    ImageViewerComponent,
    ImageComponent,
    ImageButtonsComponent,
    ContactFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
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
