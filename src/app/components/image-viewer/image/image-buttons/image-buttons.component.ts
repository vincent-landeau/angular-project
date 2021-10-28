import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../../../../models/image.model";

@Component({
  selector: 'image-buttons',
  templateUrl: './image-buttons.component.html',
  styleUrls: ['./image-buttons.component.css']
})
export class ImageButtonsComponent implements OnInit {

  @Input() imageComments: any;
  @Output() addCommentEventToImageComponent = new EventEmitter<string>();
  showCommentSection = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCommentSection() {
    this.showCommentSection = !this.showCommentSection;
    console.log(this.showCommentSection);
    console.log(this.imageComments);
  }

  emitAddCommentEventToImageComponent() {
    const commentInput = document.getElementById('comment-input');
    if (commentInput) {
      const commentInputValue = (commentInput as HTMLInputElement).value;
      if (commentInputValue) {
        this.addCommentEventToImageComponent.emit(commentInputValue);
        (commentInput as HTMLInputElement).value = '';
      }
    }
  }

}
