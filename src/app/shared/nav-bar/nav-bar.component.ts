import { Component, Input } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() title: string = '';
  @Input() showBackButton: boolean = false;

  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.back();
  }
}