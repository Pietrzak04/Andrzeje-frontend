import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})
export class BottomNavBarComponent {
  public href = "";

  constructor(private router: Router) {
    router.events.subscribe(()=>{
      this.href = location.pathname
    })
  }
}
