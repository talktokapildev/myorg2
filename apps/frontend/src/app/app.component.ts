import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'myorg2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend1';
  data = [];
  constructor(http: HttpClient) {
    http.get<any>('/api/users').subscribe((d) => {
      console.log('DDAATTAA', d);
      this.data = d.users;
    });
  }
}
