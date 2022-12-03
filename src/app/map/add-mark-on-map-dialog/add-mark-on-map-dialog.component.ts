import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EscapePointsService } from '../../data-services/escape-points.service';

@Component({
  selector: 'app-add-mark-on-map-dialog',
  templateUrl: './add-mark-on-map-dialog.component.html',
  styleUrls: ['./add-mark-on-map-dialog.component.scss']
})
export class AddMarkOnMapDialogComponent {
  name: string = "";
  description: string = "";
  constructor(private matDialog: MatDialog ,private escapePointsService: EscapePointsService,@Inject(MAT_DIALOG_DATA) public data: {lat:number, lng: number}) {}

  addEscapePlace() {
    this.escapePointsService.addEscapePoint({id:0, name: this.name, latitude: this.data.lat,
      longitude: this.data.lng, description: this.description });
    this.matDialog.closeAll();
  }

}


