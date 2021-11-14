import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ImageModel} from "../../models/image.model";
import * as faker from 'faker';
import {ImageCommentsModel} from "../../models/image-comments.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  imageViewerList? : any;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.imageViewerList = [
      [
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
          comments: [
            new ImageCommentsModel({
              author: faker.name.findName(),
              comment: 'test'
            })
          ]
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
      ],
      [
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
          comments: [
            new ImageCommentsModel({
              author: faker.name.findName(),
              comment: 'test'
            })
          ]
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
        new ImageModel({
          url: faker.image.imageUrl(140, 140, undefined, true, true),
          alt: faker.lorem.words(4),
          likes : faker.datatype.number(100),
        }),
      ]
    ]
  }

  ngOnInit(): void {
  }

}
