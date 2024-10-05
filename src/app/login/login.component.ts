import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  constructor(private routerExtensions: RouterExtensions) {}

  onLogin() {
    // Implement actual login logic here
    console.log('Login with:', this.email, this.password)
    this.routerExtensions.navigate(['/home'], { clearHistory: true })
  }
}