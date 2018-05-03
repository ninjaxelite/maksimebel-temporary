import {PresentationService} from '../presentation/presentation.service';
import {Image} from '../presentation/image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  imgFolder: String = './assets/articles/sofas/';
  images: Array<Image> = [];
  items: Array<any>;

  constructor(private presentService: PresentationService) { }

  ngOnInit() {
    this.images = [
      new Image('sofa_present_1.jpg', 'DEIN ECKSOFA', 'Die gemütlichste Ecke in deinem Zuhause'),
      new Image('sofa_present_2.jpg', 'DEIN ECKSOFA', 'Die gemütlichste Ecke in deinem Zuhause')
    ];

    this.items = [
      { name: './assets/articles/sofas/sofa_1.jpg' },
      { name: './assets/articles/sofas/sofa_2.jpg' },
      { name: './assets/articles/sofas/sofa_3.jpg' },
      { name: './assets/articles/sofas/sofa_4.jpg' },
      { name: './assets/articles/sofas/sofa_5.jpg' },
      { name: './assets/articles/sofas/sofa_1.jpg' },
      { name: './assets/articles/sofas/sofa_2.jpg' }
    ];

    this.presentService.setImages(this.images); 
  }

}
