import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EscapePoints} from "../../../data-services/data-interfaces/escape-points-interface";

@Component({
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrls: ['./vote-dialog.component.scss']
})
export class VoteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EscapePoints) {}

}
