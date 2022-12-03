import { Component } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-voting-map',
  templateUrl: './voting-map.component.html',
  styleUrls: ['./voting-map.component.scss']
})
export class VotingMapComponent {

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 53.4481, 14.5372 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
