import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from "../../../models/image.model";

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageAttr: ImageModel;
  @Output() addCommentEventToImageViewerComponent = new EventEmitter<string>();
  @Output() addOneLike = new EventEmitter<void>();
  addCommentEventToImageComponent: string;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onEmitAddCommentEventToImageComponent(event: string) {
    this.addCommentEventToImageComponent = event;
    this.changeDetectorRef.detectChanges();
    this.emitAddCommentEventToImageViewerComponent();
  }

  emitAddCommentEventToImageViewerComponent() {
    this.addCommentEventToImageViewerComponent.emit(this.addCommentEventToImageComponent);
  }

  onEmitAddOneLike(event: void) {
    this.changeDetectorRef.detectChanges();
    this.emitAddOneLike();
  }

  emitAddOneLike() {
    this.addOneLike.emit();
  }

}
