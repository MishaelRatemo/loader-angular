import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httploader';
  spinnerStyle = Spinkit;

  constructor(private http: HttpClient) {}

  getIMDBData() {
    return this.http
    .get<any>('https://api.github.com/users')
    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Error Found!');
    });
  }

}
