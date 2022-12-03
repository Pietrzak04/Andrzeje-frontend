import { Injectable } from '@angular/core';
import {EscapePoints} from "./data-interfaces/escape-points-interface";

@Injectable({
  providedIn: 'root'
})
export class EscapePointsService {
  private allEscapePoints: Array<EscapePoints> = [
    {
      "name": "ładny mostek",
      "latitude": 53.4452,
      "longitude": 14.53625,
      "description": "most w parku kasprowicza nad rusałką"
    },
    {
      "name": "syrenie stawy",
      "latitude": 53.45724,
      "longitude": 14.51034,
      "description": "altana przy syrenich stawach "
    },
    {
      "name": "bukowiec",
      "latitude": 53.33817,
      "longitude": 14.64158,
      "description": "najwyzszy szczyt puszczy bukowej"
    },
    {
      "name": "wieża gocławska",
      "latitude": 53.47709,
      "longitude": 14.60145,
      "description": "baszta przy gocławiu"
    },
    {
      "name": "plaża głębokie",
      "latitude": 53.47237,
      "longitude": 14.48485,
      "description": "idealna do odpoczynku"
    },
    {
      "name": "jezioro szmaragdowe",
      "latitude": 53.37287,
      "longitude": 14.62488,
      "description": "jezioro o szmaragdowym kolorze"
    },
    {
      "name": "jezioro świdwie",
      "latitude": 53.55776,
      "longitude": 14.3801,
      "description": "wieża widokowa przy jeziorze świdwie"
    }

  ]

  getEscapePoints(): Array<EscapePoints>{
    return this.allEscapePoints
  }

  addEscapePoint(escapePoint: EscapePoints){
    this.allEscapePoints.push(escapePoint);
  }
}
