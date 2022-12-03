import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscapePointsMapComponent } from '../escape-points-map/escape-points-map.component';
import { ChallengeMapComponent } from '../challenge-map/challenge-map.component';

const routes: Routes = [
  {  path: '', component: EscapePointsMapComponent },
  {  path: 'home', component: EscapePointsMapComponent },
  {  path: 'challengeMap', component: ChallengeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
