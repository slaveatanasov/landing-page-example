import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navScrolled: boolean;

  constructor() { }

  ngOnInit() {
    this.navScrolled = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 150) {
      this.navScrolled = true;
    } else {
      this.navScrolled = false;
    }
  }

}
