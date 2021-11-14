import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as faker from 'faker';
import {ImageModel} from "../../models/image.model";
import {ImageCommentsModel} from "../../models/image-comments.model";

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  @Input()imageList? : any;
  addCommentEventToImageViewerComponent: string;
  breakpoint : number;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (window.innerWidth <= 400) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 800) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  onResize(event:any)  {
    if (window.innerWidth <= 400) {
      this.breakpoint = 1;
    } else if (window.innerWidth <= 800) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  onEmitAddCommentEventToImageViewerComponent(event: string, index: number) {
    this.addCommentEventToImageViewerComponent = event;
    this.changeDetectorRef.detectChanges();
    this.imageList[index].comments.push(new ImageCommentsModel({
      author: faker.name.findName(),
      comment: this.addCommentEventToImageViewerComponent
    }));
  }

  onEmitAddOneLike(event: void, index: number) {
    this.changeDetectorRef.detectChanges();
    this.imageList[index].likes++;
    console.log(this.imageList[index].likes);
  }

}
