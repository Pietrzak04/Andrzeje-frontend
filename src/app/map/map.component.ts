import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';
import { EscapePointsService } from '../data-services/escape-points.service';
import { MatDialog} from '@angular/material/dialog';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { EscapePoints } from '../data-services/data-interfaces/escape-points-interface';
import { AddMarkOnMapDialogComponent } from './add-mark-on-map-dialog/add-mark-on-map-dialog.component';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{
constructor(private escapePointsService: EscapePointsService, private dialog: MatDialog) {}

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

    let escapePoints = this.escapePointsService.getEscapePoints();

    escapePoints.forEach(value => {
      const marker = L.marker([value.latitude, value.longitude]);
      marker.addTo(this.map);

      marker.on('click', () => {
          this.openDialog(value);
      })
    })

    this.map.on('click', (e:any) => {
      this.openDialogAdding({lat: e.latlng.lat, lng: e.latlng.lng});
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    })
  }

  openDialog(value: EscapePoints){
    this.dialog.open(MapDialogComponent, {
      data: value
    })
  }

  openDialogAdding(value: {}){
    this.dialog.open(AddMarkOnMapDialogComponent, {
      data: value
    })
  }

  ngOnInit(){
    this.map.remove();
  }

  ngAfterViewInit() {
    this.initMap();
  }
}
