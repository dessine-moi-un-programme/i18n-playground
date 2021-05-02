import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-playground';
  nextArrivalDate: Date = new Date();
  price: number = 1.5;
  percentage: number = 0.7;
  pineappleNumber: number = 2;
}
