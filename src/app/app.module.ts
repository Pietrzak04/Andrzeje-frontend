import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscapePointsMapComponent } from './escape-points-map/escape-points-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EscapePointsMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
