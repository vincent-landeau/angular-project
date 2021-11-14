import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../../../../models/image.model";

@Component({
  selector: 'image-buttons',
  templateUrl: './image-buttons.component.html',
  styleUrls: ['./image-buttons.component.css']
})
export class ImageButtonsComponent implements OnInit {

  @Input() imageAttr: any;
  @Output() addCommentEventToImageComponent = new EventEmitter<string>();
  @Output() addOneLike = new EventEmitter<void>();
  showCommentSection = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCommentSection() {
    this.showCommentSection = !this.showCommentSection;
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

  emitAddOneLike() {
      this.addOneLike.emit();
  }

}
