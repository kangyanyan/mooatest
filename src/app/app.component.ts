import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mooaPlatform } from 'mooa';

@Component({
  selector: 'app-hell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hell';

  constructor(private router: Router) {
    mooaPlatform.handleRouterUpdate(this.router, 'hell');
  }
}
