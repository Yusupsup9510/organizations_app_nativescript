import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  onGetStarted() {
    this.routerExtensions.navigate(['/login'], { clearHistory: true })
  }
}