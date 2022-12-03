import { Component, OnInit } from '@angular/core';
import { EscapePointsService } from '../../data-services/escape-points.service';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import { EscapePoints } from '../../data-services/data-interfaces/escape-points-interface';
import { MapDialogComponent } from '../../map/map-dialog/map-dialog.component';

@Component({
  selector: 'app-challenge-map',
  templateUrl: './challenge-map.component.html',
  styleUrls: ['./challenge-map.component.scss']
})
export class ChallengeMapComponent implements OnInit{
  private mapChallenge: any;
  constructor(private escapePointsService: EscapePointsService, private dialog: MatDialog) {}

  private initMap(): void {

    this.mapChallenge = L.map('map', {
      center: [ 53.4481, 14.5372 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.mapChallenge);

    let escapePoints = this.escapePointsService.getEscapePoints();

    escapePoints.forEach(value => {
      const marker = L.marker([value.latitude, value.longitude]);
      marker.addTo(this.mapChallenge);

      marker.on('click', () => {
        this.openDialog(value);
      })
    })
  }

  openDialog(value: EscapePoints){
    this.dialog.open(MapDialogComponent, {
      data: value
    })
  }

  ngOnInit(){
    this.mapChallenge.remove();
  }

  ngAfterViewInit() {
    this.initMap();
  }

}
