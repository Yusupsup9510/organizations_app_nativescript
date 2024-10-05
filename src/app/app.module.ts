import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { OnboardingComponent } from './onboarding/onboarding.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { RoomComponent } from './room/room.component'
import { NavBarComponent } from './shared/nav-bar/nav-bar.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    OnboardingComponent,
    LoginComponent,
    HomeComponent,
    RoomComponent,
    NavBarComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}