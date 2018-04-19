import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


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
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  menuState: String = 'out';
  drRegale: String[] = ['Bücherregale', 'Aktenregale', 'Schallplattenregale', 'Bibliothek'];
  drSchraenke: String[] = ['Kleiderschränke', 'Sideboards', 'Highboards', 'Kommoden',
    'Buffetschränke', 'Lowboards', 'Wohnwände', 'Aktenschränke', 'Rollcontainer'];
  drSofSess: String[] = ['Sofas', 'Ecksofas', 'Schlafsofas', 'Sessel'];
  drTische: String[] = ['Esstische', 'Schreibtische', 'Couch- & Beistelltische', 'Konsolentische'];
  drStuehle: String[] = ['Esszimmerstühle', 'Holzstühle', 'Armlehnstühle', 'Barhocker'];

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // clicked inside
    } else {
      // clicked outside
      this.menuState = 'out';
    }
  }
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
