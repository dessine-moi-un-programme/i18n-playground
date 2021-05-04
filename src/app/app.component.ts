import { Component, Inject, LOCALE_ID } from '@angular/core';

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

  constructor(@Inject(LOCALE_ID) public language: string) { }

  languageChanged(): void {
    window.location.href = location.origin + '/' + this.language + '/index.html';
  }
}
