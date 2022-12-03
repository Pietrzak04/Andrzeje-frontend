import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EscapePoints} from "../../../data-services/data-interfaces/escape-points-interface";
import {UserData} from "../../../data-services/data-interfaces/user-data-interface";
import {EscapePointsService} from "../../../data-services/escape-points.service";

@Component({
  selector: 'app-vote-dialog',
  templateUrl: './vote-dialog.component.html',
  styleUrls: ['./vote-dialog.component.scss']
})
export class VoteDialogComponent {
  currentUserId = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: EscapePoints, private escapePointsService: EscapePointsService) {}

  escapePointVoted(data: EscapePoints) {
    this.escapePointsService.decrementUserVote(this.currentUserId);
    this.escapePointsService.incrementEscapePointVotesQuantity(data.id);
    console.log(this.escapePointsService.getEscapePointsVotesList());
  }
}
