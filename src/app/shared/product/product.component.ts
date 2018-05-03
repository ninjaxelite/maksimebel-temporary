import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('article') article: ElementRef;

  @Input() articleImg: String;
  @Input() showDetails: Boolean;
  @Input() showDescription: Boolean;
  @Input() descTitel: String;
  @Input() imgWidth: Number = 350;
  @Input() responsive: Boolean = false;

  constructor() {}

  ngOnInit() {
    if(this.responsive) {
      this.article.nativeElement.classList.add('responsive-width');
    }
  }

}
