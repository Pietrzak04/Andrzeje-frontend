import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { RouterModule } from '@angular/router';
import { EscapePointsMapComponent } from './escape-points-map/escape-points-map.component';
import { ChallengeMapComponent } from './challenge-map/challenge-map.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    EscapePointsMapComponent,
    ChallengeMapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
