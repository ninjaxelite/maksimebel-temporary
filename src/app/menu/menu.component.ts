import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { PresentationService } from '../presentation/presentation.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, -100%, 0)',
        top: '-100px'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  @ViewChild('products') mProducts: ElementRef;

  menuState: String = 'out';
  drRegale: String[] = ['Bücherregale', 'Aktenregale', 'Schallplattenregale', 'Bibliothek'];
  drSchraenke: String[] = ['Kleiderschränke', 'Sideboards', 'Highboards', 'Kommoden',
    'Buffetschränke', 'Lowboards', 'Wohnwände', 'Aktenschränke', 'Rollcontainer'];
  drSofSess: String[] = ['Sofas', 'Ecksofas', 'Schlafsofas', 'Sessel'];
  drTische: String[] = ['Esstische', 'Schreibtische', 'Couch & Tische', 'Konsolentische'];
  drStuehle: String[] = ['Esszimmerstühle', 'Holzstühle', 'Armlehnstühle', 'Barhocker'];

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // clicked inside
    } else {
      // clicked outside
      this.menuState = 'out';
      this.mProducts.nativeElement.classList.remove('active');
    }
  }
  constructor(private eRef: ElementRef, private router: Router, private activatedRoute: ActivatedRoute,
                private presentService: PresentationService) { }

  ngOnInit() {
  }

  toggleMenu(link) {
    setTimeout(() => this.menuState = this.menuState === 'out' ? 'in' : 'out', 300);
    switch(link) {
      case 'products': 
        this.mProducts.nativeElement.classList.contains('active') ? 
          this.mProducts.nativeElement.classList.remove('active') : this.mProducts.nativeElement.classList.add('active');
        break;
      default: 
        if(link) {
          this.presentService.showBlurEffect();
          this.router.navigate([link], {relativeTo: this.activatedRoute})
        }
    }
  }

  toggleDropdown(drMenu: HTMLDivElement) {
    drMenu.classList.contains('show') ? drMenu.classList.remove('show') :  drMenu.classList.add('show'); 
  }
  homeScreen() {
    this.presentService.showBlurEffect();
    setTimeout(() => this.menuState = 'out', 200);
    setTimeout(() => this.presentService.hideBlurEffect(), 300);
  }
}
