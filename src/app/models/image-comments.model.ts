import {Model} from "./model";

export class ImageCommentsModel implements Model{
  readonly author: string;
  readonly comment: string;

  constructor(input: Partial<ImageCommentsModel>) {
    this.author = input.author || '';
    this.comment = input.comment || '';
  }
}
