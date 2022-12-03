import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-voting-map',
  templateUrl: './voting-map.component.html',
  styleUrls: ['./voting-map.component.scss']
})
export class VotingMapComponent implements OnInit{

  private mapVoting: any;

  private initMap(): void {
    this.mapVoting = L.map('map', {
      center: [ 53.4481, 14.5372 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.mapVoting);
  }

  ngOnInit(){
    this.mapVoting.remove();
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
