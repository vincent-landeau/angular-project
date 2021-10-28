import {Model} from "./model";
import * as faker from "faker";
import {ImageCommentsModel} from "./image-comments.model";

export class ImageModel implements Model{
  readonly url: string;
  readonly alt: string;
  readonly likes: number;
  readonly comments: any;

  constructor(input: Partial<ImageModel>) {
    this.url = input.url || '';
    this.alt = input.alt || '';
    this.likes = input.likes || faker.datatype.number(10);
    this.comments = input.comments || undefined;
  }
}
