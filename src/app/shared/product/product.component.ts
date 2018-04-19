import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() articleImg: String;
  @Input() showDetails: Boolean;
  @Input() showDescription: Boolean;
  @Input() descTitel: String;
  @Input() imgWidth: Number = 350;

  constructor() {}

  ngOnInit() {
  }

}
