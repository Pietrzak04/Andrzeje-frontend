import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as L from "leaflet";
import {EscapePointsService} from "../../data-services/escape-points.service";
import {MatDialog} from "@angular/material/dialog";
import {EscapePoints} from "../../data-services/data-interfaces/escape-points-interface";
import {MapDialogComponent} from "../../map/map-dialog/map-dialog.component";
import {VoteDialogComponent} from "./vote-dialog/vote-dialog.component";

@Component({
  selector: 'app-voting-map',
  templateUrl: './voting-map.component.html',
  styleUrls: ['./voting-map.component.scss']
})
export class VotingMapComponent implements OnInit{

  private mapVoting: any;

  constructor(public escapePointsService: EscapePointsService, private dialog: MatDialog) {}

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

    let escapePoints = this.escapePointsService.getEscapePoints();

    escapePoints.forEach(value => {
      const marker = L.marker([value.latitude, value.longitude]);
      marker.addTo(this.mapVoting);

      marker.on('click', () => {
        this.openDialog(value);
      })
    })
  }

  openDialog(value: EscapePoints){
    if(this.escapePointsService.getCurrentUserVotes() > 0) {

      this.dialog.open(VoteDialogComponent, {
        data: value
      })
    }
  }

  ngOnInit(){
    this.mapVoting.remove();
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
