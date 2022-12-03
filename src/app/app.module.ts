import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { EscapePointsMapComponent } from './escape-points-map/escape-points-map.component';
import { ChallengeMapComponent } from './challenge-map/challenge-map.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VotingComponent } from './voting/voting.component';

import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    EscapePointsMapComponent,
    ChallengeMapComponent,
    UserProfileComponent,
    MapComponent,
    UserProfileComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
