import { Injectable } from '@angular/core';
import {EscapePoints} from "./data-interfaces/escape-points-interface";
import {UserData} from "./data-interfaces/user-data-interface";
import {EscapePointsVotes} from "./data-interfaces/escape-points-votes-interface";

@Injectable({
  providedIn: 'root'
})
export class EscapePointsService {
  currentUser = 0;

  private allEscapePoints: Array<EscapePoints> = [
    {
      "id": 0,
      "name": "ładny mostek",
      "latitude": 53.4452,
      "longitude": 14.53625,
      "description": "most w parku kasprowicza nad rusałką"
    },
    {
      "id": 1,
      "name": "syrenie stawy",
      "latitude": 53.45724,
      "longitude": 14.51034,
      "description": "altana przy syrenich stawach "
    },
    {
      "id": 2,
      "name": "bukowiec",
      "latitude": 53.33817,
      "longitude": 14.64158,
      "description": "najwyzszy szczyt puszczy bukowej"
    },
    {
      "id": 3,
      "name": "wieża gocławska",
      "latitude": 53.47709,
      "longitude": 14.60145,
      "description": "baszta przy gocławiu"
    },
    {
      "id": 4,
      "name": "plaża głębokie",
      "latitude": 53.47237,
      "longitude": 14.48485,
      "description": "idealna do odpoczynku"
    },
    {
      "id": 5,
      "name": "jezioro szmaragdowe",
      "latitude": 53.37287,
      "longitude": 14.62488,
      "description": "jezioro o szmaragdowym kolorze"
    },
    {
      "id": 6,
      "name": "jezioro świdwie",
      "latitude": 53.55776,
      "longitude": 14.3801,
      "description": "wieża widokowa przy jeziorze świdwie"
    }

  ]

  private usersArray: Array<UserData> = [
    {
      "id": 0,
      "name": "Andrzej",
      "surname": "Andrzejczyk",
      "votes": 3
    },
    {
      "id": 1,
      "name": "Maciej",
      "surname": "Maciejek",
      "votes": 2
    },
  ]

  private escapePointsVotesList: Array<EscapePointsVotes> = [
    {
      "escapePointId": 0,
      "votesQuantity": 2
    },
    {
      "escapePointId": 1,
      "votesQuantity": 0
    },
    {
      "escapePointId": 2,
      "votesQuantity": 0
    },
    {
      "escapePointId": 3,
      "votesQuantity": 2
    },
    {
      "escapePointId": 4,
      "votesQuantity": 1
    },
    {
      "escapePointId": 5,
      "votesQuantity": 1
    },
  ]

  getEscapePoints(): Array<EscapePoints>{
    return this.allEscapePoints
  }

  getCurrentUserVotes(): number{
    return this.usersArray[this.currentUser].votes;
  }

  getEscapePointsVotesList(): Array<EscapePointsVotes>{
    return this.escapePointsVotesList;
  }

  decrementUserVote(userId: number){
    this.usersArray[userId].votes --;
  }

  incrementEscapePointVotesQuantity(escapePointId: number){
    this.escapePointsVotesList[escapePointId].votesQuantity ++;
  }

  addEscapePoint(escapePoint: EscapePoints){
    this.allEscapePoints.push(escapePoint);
  }
}
