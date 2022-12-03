import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscapePointsMapComponent } from '../escape-points-map/escape-points-map.component';
import { ChallengeMapComponent } from '../challenge-map/challenge-map.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

const routes: Routes = [
  {  path: '', component: EscapePointsMapComponent },
  {  path: 'challengeMap', component: ChallengeMapComponent },
  {  path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
