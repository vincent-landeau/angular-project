import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as faker from 'faker';
import {ImageModel} from "../../models/image.model";
import {ImageCommentsModel} from "../../models/image-comments.model";

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  imageList? : any;
  addCommentEventToImageViewerComponent: string;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.imageList = [
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4),
        comments: [
          new ImageCommentsModel({
            comment: 'test'
          })
        ]
      }),
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4)
      }),
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4)
      }),
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4)
      }),
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4)
      }),
      new ImageModel({
        url: faker.image.imageUrl(140, 140, undefined, true, true),
        alt: faker.lorem.words(4)
      }),
    ]
  }

  ngOnInit(): void {
  }

  onEmitAddCommentEventToImageViewerComponent(event: string, index: number) {
    this.addCommentEventToImageViewerComponent = event;
    this.changeDetectorRef.detectChanges();
    this.imageList[index].comments.push(new ImageCommentsModel({
      comment: this.addCommentEventToImageViewerComponent
    }));
  }

}
