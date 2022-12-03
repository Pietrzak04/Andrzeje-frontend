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
import { MapDialogComponent } from './map/map-dialog/map-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {VotingMapComponent} from "./voting/voting-map/voting-map.component";
import { VoteDialogComponent } from './voting/voting-map/vote-dialog/vote-dialog.component';
import { AddMarkOnMapDialogComponent } from './map/add-mark-on-map-dialog/add-mark-on-map-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    EscapePointsMapComponent,
    ChallengeMapComponent,
    UserProfileComponent,
    MapComponent,
    UserProfileComponent,
    VotingComponent,
    MapDialogComponent,
    VotingComponent,
    VotingMapComponent,
    VoteDialogComponent,
    MapDialogComponent,
    AddMarkOnMapDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
