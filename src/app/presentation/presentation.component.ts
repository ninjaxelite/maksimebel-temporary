import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PresentationService } from './presentation.service';
import { Image } from './image';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  @ViewChild('m') img: ElementRef;

  @Input() imgFolderPath: String;
  @Input() position: String = '28%';
  images: Array<Image>;
  imgSrc: String;
  selltextTop: String;
  selltextBottom: String;
  ind = 0;

  constructor(private presentService: PresentationService) { }

  ngOnInit() {
    this.images = this.presentService.getImages();
    this.imgSrc = this.getImage(this.ind);
  }

  navigate(v) {
    this.img.nativeElement.style = 'opacity: .8';
    setTimeout(() => {
      v === 1 ? this.getImage(--this.ind) : this.getImage(++this.ind);
      this.img.nativeElement.style = 'opacity: 1';
    }, 300);
  }

  getImage(i): String {
    i <= -1 ? this.ind = this.images.length - 1 : this.ind === this.images.length ? this.ind = 0 : this.ind;
    this.selltextTop = this.images[this.ind].textTop;
    this.selltextBottom = this.images[this.ind].textBottom;
    return this.imgSrc = this.images[this.ind].imgPath.toString();
  }
}
